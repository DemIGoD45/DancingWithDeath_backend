
function Cita (date, email) {
    this.date = date,
    this.email = email;
}

Cita.prototype.getFullDate = function () {
    return `${this.date.getUTCMonth()} ${this.date.getUTCDate()} ${this.date.getUTCFullYear()}`
}

Cita.prototype.getJustHour = function () {
    return this.date.getUTCHours();
}

Cita.prototype.getFullFinishHour = function () {
    return `${this.date.getUTCHours() + 1}:${this.date.getMinutes()}`
}


Cita.prototype.getFullStartHour = function () {
    return `${this.date.getUTCHours()}:${this.date.getMinutes()}`
}

module.exports = Cita;