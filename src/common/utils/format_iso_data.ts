export const formatISODate = (fecha: Date) => {
    var año = fecha.getFullYear();
    var mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Agrega un cero delante si es necesario
    var dia = ('0' + fecha.getDate()).slice(-2); // Agrega un cero delante si es necesario
    var horas = ('0' + fecha.getHours()).slice(-2); // Agrega un cero delante si es necesario
    var minutos = ('0' + fecha.getMinutes()).slice(-2); // Agrega un cero delante si es necesario
    var segundos = ('0' + fecha.getSeconds()).slice(-2); // Agrega un cero delante si es necesario
    var milisegundos = ('00' + fecha.getMilliseconds()).slice(-3);

    return (año + '-' + mes + '-' + dia + 'T' + horas + ':' + minutos + ':' + segundos + '.' + milisegundos);
}