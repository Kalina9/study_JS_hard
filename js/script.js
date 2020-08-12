let getString = function (string) {
    if (typeof string !== 'string') {
        alert('Вы ввели неверные данные. Введите строку.');
        return;
    }
    // Удаляю пробелы с концов строки trim()
    string = string.trim();
    //Если длина строки > 30 символов добавляю ..., если меньше показываю строку
    return string.length > 30 ? string.substr(0, 30) + '...' : string;
    //return string.length > 30 ? string.slice(0, 30) + '...' : string;
}
console.log(getString('   dsssssssssssssssssssiissssssssssssssdsdds   '));