## Routes

- **[ GET ] Get all appointments**
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

- **[ POST ] add New Appointments**

    ```javascript

    fetch('http://localhost:3001/reto/api/add', {
        method: 'POST',
        body: {
                fecha: "2022-01-24",
                hora: "12:45",
                contacto: "ejemplo@correo.com"
            }
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

