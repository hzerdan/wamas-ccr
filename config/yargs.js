const argv = require('yargs')
              .option('b',{
                alias:'base',
                type: 'number',
                demandOption: false
              })
              .check((argv,options) => {
                if ( isNaN(argv.b)){
                  throw 'La base tiene que ser un número'
                }
                return true;
              })
              .argv;

console.log(argv);

module.exports = argv;
