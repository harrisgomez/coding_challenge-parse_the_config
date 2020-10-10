const fs = require('fs');
const config = '/example.config';

// Coerces Boolean-like strings to Boolean true/false if the converted value matches any of the truthy/falsy items, respectively.
const getBoolType = val => {
    const isString = typeof val === 'string';
    const truthy = ['true', 'on', 'yes'],
          falsy = ['false', 'off', 'no'];

    if (isString && truthy.some(t => val.includes(t))) return true;
    if (isString && falsy.some(f => val.includes(f))) return false;

    return val;
}

// Coerces numeric strings to type Number if the converted value does not equal NaN
const getNumType = val => {
    const isString = typeof val === 'string',
          isNumeric = !isNaN(Number(val));

    if (isString && isNumeric) return Number(val);

    return val;
}

const parseConfigToJSON = file => {
    // Read local file as a string
    const str = fs.readFileSync(__dirname + file, 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
    const arrOfStrings = str.split(`\n`);   // Turn each line in the string into an array item
    const obj = {};

    arrOfStrings
        .filter(line => line[0] !== '#')    // Creates a new array from items, ignoring comments
        .map(str => str.split('='))         // Returns a new array containing keys and values
        .forEach(keyValPair => {            // Iterate over new array of keys and values
            let key = keyValPair[0].trim(); // Remove any whitespace from keys
            let val = keyValPair[1].trim(); // Remove any whitespace from values

            val = getBoolType(val);         // Coerce truthy/falsy values of type String to type Boolean
            val = getNumType(val);          // Coerce numeric values of type String to type Number

            obj[key] = val;                 // Create properties from key value pairs on the initialized object literal
        })

    return obj;
};

// Example use of the parseConfigToJSON function
const actionableConfig = parseConfigToJSON(config);

console.log(`Value of "host" is ${actionableConfig.host} and is of type ${typeof actionableConfig.host}`);
console.log(`Value of "server_id" is ${actionableConfig.server_id} and is of type ${typeof actionableConfig.server_id}`);
console.log(`Value of "server_load_alarm" is ${actionableConfig.server_load_alarm} and is of type ${typeof actionableConfig.server_load_alarm}`);
console.log(`Value of "user" is ${actionableConfig.user} and is of type ${typeof actionableConfig.user}`);
console.log(`Value of "verbose" is ${actionableConfig.verbose} and is of type ${typeof actionableConfig.verbose}`);
console.log(`Value of "test_mode" is ${actionableConfig.test_mode} and is of type ${typeof actionableConfig.test_mode}`);
console.log(`Value of "debug_mode" is ${actionableConfig.debug_mode} and is of type ${typeof actionableConfig.debug_mode}`);
console.log(`Value of "log_file_path" is ${actionableConfig.log_file_path} and is of type ${typeof actionableConfig.log_file_path}`);
console.log(`Value of "send_notifications" is ${actionableConfig.send_notifications} and is of type ${typeof actionableConfig.send_notifications}`);