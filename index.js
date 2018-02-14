var moment =  require('moment-timezone');

//var d = new Date();
//console.log(d);
//var isoDate = d.toISOString();
//console.log(isoDate);
//var mtz = moment.tz(d,'YYYY-MM-DDTHH:mm:ss','America/New_York').format();
//console.log(mtz);

var now = moment();

// create a new moment based on the original one
var another = now.clone();

// change the offset of the new moment - passing true to keep the local time
another.utcOffset('+05:30', true);

// log the output
console.log(now.format());      // "2016-01-15T11:58:07-08:00"
console.log(another.format()); 

console.log(Date(another.format()));