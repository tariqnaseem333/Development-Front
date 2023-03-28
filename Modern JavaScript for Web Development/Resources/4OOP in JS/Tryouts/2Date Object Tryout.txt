// to get today's Date
var today = new Date();
console.log("Today's Date is ",today);

// pass value in milliseconds
var startingDate = new Date(0);
console.log("Date starts from ",startingDate); //the starting date is  January 01, 1970 00:00:00 UTC

var dateInMillisecond = new Date(100000000000);
console.log("Date for given milliseconds is ",dateInMillisecond); // approximate date will be 03 March 1973

// pass value in yyyy,mm,dd
var dateObj = new Date(2019,02,21);
console.log("Date for given value is ", dateObj); // Month starts from 0

//get month from given date
var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("02/12/2019")));

//set the value of year
 var todayDate = new Date();
  todayDate.setFullYear(2020);
  console.log("Value of todayDate after setFullYear",todayDate)
