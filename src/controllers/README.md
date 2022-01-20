## Controllers
- **getAllAppointments**: Gets all appointments by date
    + year `int`
    + month `int`
    + day `int`

    ```javascript

    getAllAppointments(); // (parameters received by res.params)
    // ==>
    {
    msg: "Agenda",
    data:[
            {
                date: "2022-01-24T15:40:00.000Z",
                email: "ejemplo@correo.com"
            },
            {
                date: "2022-01-24T16:40:00.000Z",
                email: "ejemplo@correo.com"
            }
        ]
    }

    ```
> the function returns an object containing all dates sorted by time

- **addNewAppointments**: Register a new appointment 
    + date `string`
    + hour `string`
    + contact `string`

    ```javascript

    ddNewAppointments(); // (parameters received by res.body)
    // Success ==>
    {
    msg: "Cita guardada correctamente",
    data: {
        date: "2022-01-24T11:45:00.000Z",
        email: "Esta es la info de contacto"
    }
    }

    // Error ==> 
    {
    error: true,
    date: "Formato de fecha incorrecto, se requiere un forma yyyy-mm-dd",
    hour: "La hora no es valida, debe de ser en horarios de oficina"
    }

    ```
> the function returns a success or error message. 
---


- **isOfficeHour** 
    + hour `string`

    ```javascript

    // Evaluate if the time format is correct. (24hr format).
    // Evaluate whether the time is in office hours (9:00 - 18:00) (In the case of 18:00 we must evaluate at 17:00, less or equal to 17:00).

    isOfficeHour(hour);
    // => The time does not comply with the format
    return {
    msg = "The time does not comply with the format 24hrs (ejemplo: 00:00, 01:30)",
    isValid: false
    }

    // => The time is not valid, it must be during office hours.
    return {
    msg = "The time is not valid, it must be during office hours.",
    isValid: false
    }

    // => Succes
    return {
    msg = "",
    isValid: true,
    hour: [10:00]
    }

    ```
> the function returns a success or error message. 
---

- **isOfficeDate**: Register a new appointment 
    + date `string`

    ```javascript

    isOfficeDate(date);
    // => The date does not comply with the format
    return {
    msg = "The date does not comply with the format year-month-day",
    isValid: false
    }

    // => The date is not valid, it must be during office date.
    return {
    msg = "The date is not valid, it must be during date office",
    isValid: false
    }

    // => Succes
    return {
    msg = "",
    isValid: true,
    hour: [2022-2-19]
    }

    ```
> the function returns a success or error message. 

---
- **getAllAppointmentsByDate**: filters out appointments that are equal in date with the parameter
    + date `Cita`
    ```javascript

    getAllAppointmentsByDate(appointment); // Appointment is an instance 
    // ===> return [{date: .., contact: ...},{date: .., contact: ...},{date: .., contact: ...}]

    ```
> the function returns an array of the appointments that match the date of the new appointment

---
- **isHourTaken**: check if the time is available
    + newCita `Cita`
    + arrayCitas `array`
    ```javascript
    
    isHourTaken(newCita, arrayCitas); // newCita is an instance 
    // ==>  time is available
    return hourData = {
      msg: "Time is available",
      isTaken: false
    }
    
    // ===>  time is not available
    return hourData = {
      msg: "Time is not available",
      isTaken: true
    }

    ```

## Request
