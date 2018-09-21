var fs = require('fs');

var fileName = 'C:/dev/brandlist.txt';


fs.readFile(fileName, 'utf8', function(err, data ) {
  if (err)
    return console.error(err);
  let parsed = data.split(',');

  // parsed.forEach( (x, idx, arr) => {
  //   arr[idx] = x.replace(/"/gi, "");
  // });

  fs.writeFile("c:/dev/brandlist_new.txt", parsed.join('\r\n'), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  }); 
});