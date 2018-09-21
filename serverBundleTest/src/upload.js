/* Upload Bundle files(../../client/dist) to S3 bucket */
var readline = require('readline');

var fileName = 'C:/awskey/accessKeys.csv';


readFile(fileName).then( data => {
  // console.log('txt ', data)
  parseCSV(data);
}).catch( err => {
  console.log('readFile catch: ', err);
});


/* async function, return the data array */
function readFile (file) {
  return new Promise( function (resolve, reject) {
    let savedLine = [];
    let rl = readline.createInterface({
      input: fs.createReadStream(file).on('error', err => { reject(err) })
    });     

    /* readline events */
    rl.on('close', ( ) => { resolve(savedLine) });    // EOF handling.
    rl.on('line', (line) => { savedLine.push(line) }); // read file per line. 
  });
}

function parseCSV (origin, deli) {
  let fields = origin[0].split(deli);
  let data = {};

  deli = deli || ','; 

  fields.forEach( (x) => { data[x] = [] }); // create property by each field.  

  origin.forEach( (x, idx, arr) => {
    x.split(deli)
  });
  console.log('parseCSV ', fields, origin);
  return {fields, }
}


