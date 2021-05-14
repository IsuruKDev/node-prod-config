# node-prod-configs
node js production ready configurations

---------------------------------------------------------------------------------------------

- NodeJS Debugger

Type ``` debugger ``` command inside the source file where the debugger needs to be triggered.

Open the command line and issue the debugging command as ``` node inspect [source_file] ```.

Open the chrome brower and load the page by typing ``` chrome://inspect ```.



- Mute ```console.log(...)``` statement

install dotenv library from NPM https://www.npmjs.com/package/dotenv by using ``` npm install --save-dev dotenv ```

Create a .env file in your project root folder level

APP_ENV=production|staging|qa mentioning the environment
