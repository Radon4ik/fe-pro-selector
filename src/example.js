const object = {
    test: {
        myField: {
            'value string': 'result',
        },
    },
};

console.log(selector(object, ['test', 'myField', 'value string'])); // => 'result'
console.log(selector(object, ['test', 'notExistField', 'value string'])); // => ''
