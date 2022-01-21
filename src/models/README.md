## Construction Function

- **Cita**
    + date `Date()`
    + email `string`

    ```Javascript

    function Cita (date, email) {
        this.date = date,
        this.email = email;
    }

    ```
> date is an instance of Date()  

- **getFullDate**: get the complete date of the appointment

    ```javascript

    Cita.getFullDate(); // ===> '12 23 1999'

    ```

- **getJustHour**: get the hour of the appointment

    ```javascript

    Cita.getJustHour(); // ===> 12

    ```

- **ggetFullFinishHour**: get the finish hour of the appointment

    ```javascript

    Cita.getFullFinishHour(); // ===> 13:30

    ```

- **getFullStartHour**: get the hour of the appointment

    ```javascript

    Cita.getFullStartHour(); // ===> 12:30

    ```
