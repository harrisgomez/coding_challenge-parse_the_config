const fs = require('fs');
const pathToFile = '/example.config';

const textToArr = text => {
    return text.split('\n');
};

const parseConfigToJSON = () => {
    const str = fs.readFileSync(__dirname + pathToFile, 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
    
    const arr = textToArr(str);

    console.log(arr);
}

parseConfigToJSON();