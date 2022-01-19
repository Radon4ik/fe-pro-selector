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
    let newObj = obj;
    // console.log('объект записывается в переменную newObj =', obj);

    keys.forEach((item) => {
        // console.log('массив строк попадает в foreach каждая строка попадает в (item)  =', item);
        if (newObj[item]) {
            newObj = newObj[item];
            // console.log('newObj(объект)+[item](строка) =', newObj);
        } else {
            newObj = " ";
            // console.log('если строки нет в объекте, то = " возвращает пустую строку "', newObj);
        }
    });
    return newObj;

}






console.log(selector(object, ['test', 'myField', 'value string'])); // => 'result'
console.log(selector(object, ['test', 'notExistField', 'value string'])); // => ''



module.exports = selector;