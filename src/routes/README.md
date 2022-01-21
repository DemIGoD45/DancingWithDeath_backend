## Routes

- **Get all appointments**
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

- **Get all appointments**

    ```javascript

    fetch('http://localhost:3001/reto/api/add', {})
    .then (resp => resp.json())
    .then(json => console.log(json))

    ```

