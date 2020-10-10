const fs = require('fs');
const pathToFile = '/example.config';

const parseConfigToJSON = () => {
    // Read local file as a string
    const str = fs.readFileSync(__dirname + pathToFile, 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
    const arrOfStrings = str.split(`\n`);   // Turn each line in the string into an array item
    const obj = {};

    arrOfStrings
        .filter(line => line[0] !== '#')    // Creates a new array from items that do not begin with '#'
        .map(str => str.split('='))         // Returns a new array containing keys and values
        .forEach(keyValPair => {            // Iterate over new array of keys and values
            let key = keyValPair[0].trim(); // Remove any whitespace from keys
            let val = keyValPair[1].trim(); // Remove any whitespace from values

            obj[key] = val;                 // Assign key-value pairs to object literal
        })

    console.log(obj);
}

parseConfigToJSON();