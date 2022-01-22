
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

Cita.prototype.addMinutes = function (minutos) {
    this.date.setMinutes(this.date.getMinutes() + minutos);
}

Cita.prototype.getFullFinishHour = function () {
    let minute = this.date.getMinutes();
    let hora = this.date.getUTCHours() + 1;
    return `${((hora < 10) ? '0' : '') + hora}:${((minute < 10) ? '0' : '') + minute}`
}


Cita.prototype.getFullStartHour = function () {
    let minute = this.date.getMinutes();
    let hora = this.date.getUTCHours();
    return `${((hora < 10) ? '0' : '') + hora}:${((minute < 10) ? '0' : '') + minute}`
}

module.exports = Cita;