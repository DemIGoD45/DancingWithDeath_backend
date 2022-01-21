const Cita = require('../models/Cita');

let agenda = [];

function getAllAppointments (req, res) {

    const { month, day, year } = req.params;

    let horario = agenda.filter(elem => elem.getFullDate() === `${month} ${day} ${year}`);

    //const horario = getAllAppointmentsByDate(month, day, year);

    if(horario.length > 0) {
      res.status().json ({
        msg: "Agenda",
        data: horario
      })
      return;
    }
    
    res.status(200).json({ msg: "there's no data", data: null});
    
}

function addNewAppointments  (req, res) {
  /**
    * si la fecha esta disponible.
    * Si la hora está disponible.
    * si no son horarios de oficina
    * si es una fecha de lunes a viernes.
  */

  let { fecha, hora, contacto } = req.body;

  // evaluar la fecha 2022-1-20 ------> si es correcta ? seguimos : mandamos un error
  // evaluar hora 9:39 ----> si es correcta ? seguimos : mandamos un error (formato de 24hrs en un horario mayor o igua a las 9:00 y menor o igual a 17:00)

  // fecha = fecha.split('-');
  // hora = hora.split(':');

  fecha = isOfficeDate(fecha);
  hora = isOfficeHour(hora);

  if(fecha.isValid && hora.isValid) {

    // Date(year, month, day, hours, minutes)
    let date = new Date(Date.UTC(...fecha.date,...hora.hour))
    //console.log("Arreglo de fecha ",fecha.date, " arreglo de horas ",hora.hour)
    // new Appointment
    let newCita = new Cita(date,contacto)
    //console.log("cita: ",newCita.date," hora: ",newCita.getJustHour()," hora completa ",newCita.getFullStartHour(), "dia ", newCita.getFullDate())
    // Appointment by date
    let resultAgenda = getAllAppointmentsByDate(newCita);
  
    if (resultAgenda.length > 0) {
      // true -> la hora está tomada 
      // false -> la hora está disponible
      let hourData =  isHourTaken (newCita, resultAgenda);
  
      if(!hourData.isTaken) {
        agenda.push(newCita);
        res.json({
          msg: "Cita guardada correctamente",
          data: newCita
        })
      } else {
        res.status(400).json({
          msg: hourData.msg,
          data: newCita
        });
      }
  
    } else {
      agenda.push(newCita);
      res.status(201).json({
        msg: "Cita guardada correctamente",
        data: newCita
      })
    }
  } else {
    res.status(400).json({
      error: true,
      date: fecha.msg,
      hour: hora.msg
    })
  }
}

function getAllAppointmentsByDate (appointment) {
    let result = agenda.filter(elem => elem.getFullDate() === appointment.getFullDate());

    return result;
}

function isHourTaken (newCita, arrayCitas) {
    let hourData = {
      msg: "Hora disponible",
      isTaken: false
    }

    arrayCitas = orderAppointments(arrayCitas);

    for(let cita of arrayCitas) {
      if(cita.getJustHour() === newCita.getJustHour() || !newCita.getFullStartHour() >= cita.getFullFinishHour() || newCita.getFullStartHour() < cita.getFullFinishHour()) {
        hourData.msg = "La hora ya ha sido tomada";
        hourData.isTaken = true;
        break;
      }
    }

  return hourData;
}

function isOfficeHour (hour) {
  let hourData = {
    msg: "",
    isValid: false
  }

  // Evaluar si el formato de la hora es correcto. (formato de 24hrs)
  if(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/.test(hour)) {
    // Evaluar que la hora sea en horario de oficina (9:00 - 18:00) (En el caso de las 18:00 debemos evaluar a las 17:00, menor o igua a las 17:00)
    if(hour >= "09:00" && hour <= "17:00") {
      hourData.isValid = true;
      hourData.hour = hour.split(':');
      return hourData

    } else {
      hourData.msg = "La hora no es valida, debe de ser en horarios de oficina"
      return hourData;
    }
  } else {
    hourData.msg = "Formato incorrecto, se requiere un formato de 24hrs (ejemplo: 00:00, 01:30)"
    return hourData;
  }
}

function isOfficeDate (date) {
  let dateData = {
    msg: "",
    isValid: false
  }

  date = date.split('-');
  date[1] = date[1] - 1;
  date = date.join('-');

  // evaluar si el formato de la fecha es valida --> year-month-day
  if(/^\d{4}([\-/.])(0?[0-8]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(date)) {
    // evaluar si la fecha está en horario de L-V
    let aux = date.split('-');
    aux = new Date(...aux);

    if(aux.getDay() % 6 === 0) {
      dateData.msg = "La fecha debe de estar en días disponibles (Lunes - Viernes)";
      return dateData;
    } else {
      dateData.isValid = true;
      dateData.date = date.split('-');
      
      return dateData;
    }

  } else {
    dateData.msg = "Formato de fecha incorrecto, se requiere un forma yyyy-mm-dd";
    return dateData;
  }
}

function orderAppointments (array) {
    array.sort(function (a, b) {
        if (a.getJustHour() > b.getJustHour()) {
          return 1;
        }
        if (a.getJustHour() < b.getJustHour()) {
          return -1;
        }
        // a must be equal to b
        return 0;
    });

    return array;
}


module.exports = {getAllAppointments, addNewAppointments }