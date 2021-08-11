function reverseStr(str){
    var listOfChars=str.split('');
    var reversedListOfChars=listOfChars.reverse();
    var reverseStr=reversedListOfChars.join('');

return reverseStr;
// return str.split('').reverse().join('');
// shorter way
}

function isPalindrome(str){
var reverse=reverseStr(str);
return str===reverse;
}


function convertDateToString(date){

var dateInString= { day:'',month:'',year:''};
if(date.day<10){
    dateInString.day="0"+date.day;
}
else{
    dateInString=date.day.toString();
}
if(date.month<10){
    dateInString.month="0"+date.month;
}
else{
    dateInString.month=date.month.toString();
}
dateInString.year=date.year.toString();
return dateInString;
}



function getAllDateFormats(date){
    var dateStr=convertDateToString(date);

    var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year;
    var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var mmddyy=dateStr.month+dateStr.day+dateStr.year.slice(-2);
    var yymmdd=dateStr.year.slice(-2)+dateStr.month+dateStr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}
var date={
    day:5,
    month:9,
    year:2020
}

console.log(getAllDateFormats(date));