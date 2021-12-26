const object = {
    test: {
        myField: {
            'value string': 'result',
        },
    },
};

let a;

const selector = (obj, keys) => {

    let a;
    


    for (keys[a] in obj) {
        return obj[keys[a]];


    }

};

console.log(selector(object, ['test', 'myField', 'value string'])); // => 'result'
console.log(selector(object, ['test', 'notExistField', 'value string'])); // => ''



module.exports = selector;

