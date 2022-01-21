
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
    let minute = this.date.getMinutes();
    return `${this.date.getUTCHours() + 1}:${((minute < 10) ? '0' : '') + minute}`
}


Cita.prototype.getFullStartHour = function () {
    let minute = this.date.getMinutes();
    return `${this.date.getUTCHours()}:${((minute < 10) ? '0' : '') + minute}`
}

module.exports = Cita;