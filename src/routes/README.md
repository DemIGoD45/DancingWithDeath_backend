## Routes

- **[ GET ] Get all appointments** : returns all existing appointments for the sent date
    + month `int`
    + day `int`
    + year `int`

    ```javascript

    fetch('http://localhost:3001/reto/api/cita/1/24/2022')
    .then (resp => resp.json())
    .then(json => console.log(json))
    
    // json -----> 
    /*
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
        }
    */

    ```

>
- **[ GET ] Get all appointments** : returns all available hours for the date
    + month `int`
    + day `int`
    + year `int`

    ```javascript

    fetch('http://localhost:3001/reto/api/cita/1/24/2022?filter=true')
    .then (resp => resp.json())
    .then(json => console.log(json))
    
    // json -----> 
    /*
        {
            "msg": "Agenda",
            "data": [
                "11:30",
                "11:45",
                "12:00",
                "12:15",
                "12:30",
                "12:45",
                "13:00",
                "13:15",
                "13:30",
                "13:45",
                "14:00",
                "14:15",
                "14:30",
                "14:45",
                "15:00",
                "15:15",
                "15:30",
                "15:45",
                "16:00",
                "16:15",
                "16:30",
                "16:45",
                "17:00"
            ]
        }
    */

    ```


- **[ POST ] add New Appointments**

    ```javascript
    
    fetch('http://localhost:3001/api/cita/add', {
        method: 'POST',
        headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        body: JSON.stringify(
            {
                fecha: "2022-01-24",
                hora: "12:45",
                contacto: "ejemplo@correo.com"
            }
        )
        }
    )
    .then (resp => resp.json())
    .then(json => console.log(json))

    /*
    console.log(json)  ------>
        {
            msg: "Cita guardada correctamente",
            data: {
                date: "2022-01-24T12:45:00.000Z",
                email: "ejemplo@correo.com"
            }
        }
    */
    ```

