'use strict'

/*
Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

Show it using alert.
*/

let myDate = new Date (2012, 1, 20, 3, 12);

alert (myDate);


/* Write a function getWeekDay(date) to show the weekday in short format:
 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
*/

let date = new Date(2020, 3, 15);

function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

alert( getWeekDay(date) );

/*
 European countries have days of week starting with Monday (number 1),
 then Tuesday (number 2) and till Sunday (number 7).
 Write a function getLocalDay(date) that returns the “European” day of week for date.
*/

let date = new Date(2020, 3, 15);

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { 
    day = 7;
  }

  return day;
}

alert( getLocalDay(date) ); 


/*
Write a function getLastDayOfMonth(year, month) that returns the last day of month.
 Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

1. year – four-digits year, for instance 2012.
2. month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2020, 0) );
  alert( getLastDayOfMonth(2019, 1) );
  alert( getLastDayOfMonth(2018, 1) );