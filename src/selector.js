const object = {
    test: {
        myField: {
            'value string': 'result',
        },
    },
};


const selector = (obj, keys) => {
    // console.log('аргумент obj принимает Объект =', obj);
    // console.log('аргумент keys принимает массив строк =', keys);
    let a = obj;
    // console.log('объект записывается в переменную а =', obj);


    keys.forEach((item) => {
        // console.log('массив строк попадает в foreach каждая строка попадает в (item)  =', item);
        if (a[item]) {
            a = a[item];
            // console.log('a(объект)+[item](строка) =', a);
        } else {
            a = " ";
            // console.log('если строки нет в объекте, то = " возвращает пустую строку "', a);
        }
    });
    return a;

}






console.log(selector(object, ['test', 'myField', 'value string'])); // => 'result'
console.log(selector(object, ['test', 'notExistField', 'value string'])); // => ''



module.exports = selector;

