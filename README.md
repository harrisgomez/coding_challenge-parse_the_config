# Summary

For this coding challenge, I created a parsing tool by exporting a module which contains a function called *parseConfigToJSON*. This module is then imported within the *main.js* script. Once the module has been instantiated, the *parseConfigToJSON* function can be called. It accepts 1 argument, which is the file path to the configuration file. After that's passed in, it will proceed to parse the configuration file (*example.config* in this example) and turn it into a JSON object. Commented lines in the configuration file are ignored, boolean-line values are coerced to the Boolean type, and numeric values are coerced to the Number type.

## Available scripts

In the project directory, you can run:

### node main

Parses the example.config file and converts it into a JSON object.  
Example usage is logged in the terminal.  
You will see the keys called and the values they return, along with value's (coerced) type.  

# Coding Challenge
## Create a parsing tool that takes an example config file and turns it into the language of your choice (hash, JSON object, associative array, class, etc.).

### Instructions
1. Do not use existing "complete" configuration parsing libraries/functions, we want to see how you would write the code to do this.
2. Use of core and stdlib functions/objects such as string manipulation, regular expressions, etc is ok.
3. We should be able to get the values of the config parameters in code, via their name. How this is done specifically is up to you.
4. Boolean-like config values (on/off, yes/no, true/false) should return real booleans: true/false.
5. Numeric config values should return real numerics: integers, doubles, etc
6. Ignore or error out on invalid config lines, your choice.
7. Please include a short example usage of your code so we can see how you call it/etc.
8. Push your work to a public git repository (github, bitbucket, etc) and send us the link.

Valid config file:  
\# This is what a comment looks like, ignore it  
\# All these config lines are valid  
host = test.com  
server_id=55331  
server_load_alarm=2.5  
user= user  
\# comment can appear here as well  
verbose =true  
test_mode = on  
debug_mode = off  
log_file_path = /tmp/logfile.log  
send_notifications = yes