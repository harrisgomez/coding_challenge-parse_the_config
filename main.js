const myModule = require('./script');
const config = '/example.config';

const moduleInstance = new myModule();
const myConfig = moduleInstance.parseConfigToJSON(config);

console.log(myConfig);
console.log(myConfig.host, typeof myConfig.host);
console.log(myConfig.server_id, typeof myConfig.server_id);
console.log(myConfig.server_load_alarm, typeof myConfig.server_load_alarm);
console.log(myConfig.user, typeof myConfig.user);
console.log(myConfig.verbose, typeof myConfig.verbose);
console.log(myConfig.test_mode, typeof myConfig.test_mode);
console.log(myConfig.debug_mode, typeof myConfig.debug_mode);
console.log(myConfig.log_file_path, typeof myConfig.log_file_path);
console.log(myConfig.send_notifications, typeof myConfig.send_notifications);