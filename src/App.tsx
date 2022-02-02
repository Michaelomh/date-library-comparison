import React from "react";
import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import "./App.css";
import { DayjsBox } from "./DayjsBox";
import { LuxonBox } from "./LuxonBox";
import { MomentBox } from "./MomentBox";

function App() {
  return (
    <Box>
      <Heading size="lg" textAlign="center" pb={2}>
        Date Library comparison
      </Heading>
      <Wrap w={"100vw"}>
        <WrapItem w="32%" justifyContent="center">
          <Heading size="md">Moment JS</Heading>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <Heading size="md">Lexon</Heading>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <Heading size="md">DayJS</Heading>
        </WrapItem>

        <WrapItem w="32%" justifyContent="center">
          <MomentBox header="Parse">
            {`moment(); // get current datetime in a Moment obj
moment("2022-01-31"); // get specified date
moment('12-25-1995', 'MM-DD-YYYY'); // get specified date in specific format
moment([2022, 1, 31, 12, 00, 59, 000]); // get date time from array format
moment(new Date()); // convert JS Date to Moment
moment().toDate; // convert Moment to JS Date
`}
          </MomentBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <LuxonBox header="Parse">
            {`DateTime.now(); // get current DateTime
DateTime.local(); // get local DateTime
DateTime.fromISO("2022-01-31"); // get specified date
DateTime.fromFormat("01-25-2022", "MM-dd-yyyy"); // get specified date in specific format
DateTime.local(2022, 1, 31, 12, 00, 59); // get date time from array format
DateTime.fromJSDate(new Date()); // convert JS Date to DateTime
DateTime.local().toJSDate(); // convert DateTime to JS Date
`}
          </LuxonBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <DayjsBox header="Parse">
            {`dayjs(); //get current datetime in dayjs
dayjs("12-10-1995"); // auto detect in MM-dd-yyyy format
dayjs("1995-01-05"); // auto detect in yyyy-mm-dd format
dayjs("10/12/2001"); // auto detect in MM/dd/yyyy format
dayjs("12-10-1995", "DD-MM-YYYY"); // you can set any format
dayjs([2010, 1, 14, 15, 25, 50, 125]);
dayjs(new Date()); // convert JS Date to Moment
dayjs().toDate(); // convert Moment to JS Date
`}
          </DayjsBox>
        </WrapItem>

        <WrapItem w="32%" justifyContent="center">
          <MomentBox header="Get + Set">
            {`moment().second(); // get seconds (0..59)
moment().minute(); // get minutes (0..59)
moment().hour(); // get hours (0..23)
moment().date(); // get date of month (1..31)
moment().day(); // get day of week (0..6)
moment().month(); // get months (0..11)
moment().year(); // get years
moment().get("year"); // get method to specify time format
moment().get("second"); // get method to specify time format

// Updates value in moment obj
moment().set('year', 2022); // set year to 2022
moment().set('month', 3);  // April
moment().set('date', 1); // 1st
moment().set('hour', 13); // 1pm
moment().set('minute', 20); 
moment().set('second', 30);
moment().set({'year': 2022, 'month': 3}); // set April 2022
`}
          </MomentBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <LuxonBox header="Parse">
            {`DateTime.now().second; // get seconds (0..59)
DateTime.now().minute; // get minutes (0..59)
DateTime.now().hour; // get hours (0..23)
DateTime.now().day; // get date of month (1..31)
DateTime.now().weekday; // get day of week (1..7)
DateTime.now().month; // get months (1..12)
DateTime.now().year; // get years

// Setting datetime only allows for Object
DateTime.now().set({ year: 2017 }); // set datetime using object, it will create a new object
`}
          </LuxonBox>
        </WrapItem>

        <WrapItem w="32%" justifyContent="center">
          <DayjsBox header="Parse">
            {`// dayjs, you are able to get or set using the same method
dayjs().second(); // get seconds (0..59)
dayjs().second(1); // set seconds to 1
dayjs().minute(); // get minutes (0..59)
dayjs().minute(59); // set minutes 59)
dayjs().hour(); // get minutes (0..23)
dayjs().hour(12); // set minutes 12)

dayjs().date(); // get date of month (1..31)
dayjs().date(1); // set month to 1st
dayjs().day(); // get day of week (0..6)
dayjs().day(0); // set day to Sunday(0)
dayjs().month(); // get months (0..11)
dayjs().month(1); // set month to Jan
dayjs().year(); // get years
dayjs().year(2020); // set years to 2020

dayjs().get("year"); // get method to specify time format (year)
dayjs().get("second"); // get method to specify time format (sec)
dayjs().set("year", 2020); // set year to 2020
dayjs().set("second", 1); // set second to 1
`}
          </DayjsBox>
        </WrapItem>

        <WrapItem w="32%" justifyContent="center">
          <MomentBox header="Manipulate">
            {`// Add Time
moment().add(7, "M"); // add 7 months
moment().add(360, "days"); // add 360 days
moment().add({ days: 5, months: 2 }); // add 5 days and 2 months

// Subtract Time
moment().subtract(7, "M"); // subtract 7 months
moment().subtract(360, "days"); // subtract 360 days
moment().subtract({ days: 5, months: 2 }); // subtract 5 days and 2 months

// Date Difference
const a = moment([2007, 0, 29]);
const b = moment([2007, 0, 28]);
a.diff(b); // 86400000
a.diff(b, "days"); // 1

const c = moment([2008, 9]);
const d = moment([2007, 0]);
c.diff(d, "years", true); // 1.75
`}
          </MomentBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <LuxonBox header="Manipulate">
            {`// Add time
DateTime.now().plus(100); // in 100 milliseconds
DateTime.now().plus({ months: 7 }); // add 7 months
DateTime.now().plus({ days: 360 }); // add 360 days

// Minus time
DateTime.now().minus(100); // in 100 milliseconds
DateTime.now().minus({ months: 7 }); // subtract 7 months
DateTime.now().minus({ days: 360 }); // subtract 360 days
DateTime.now().minus({ days: 5, months: 2 }); // subtract 5 days and 2 months

// Date Difference
DateTime.now().diff(DateTime.local(2021, 1, 31), "years").years; // difference in years
DateTime.now().diff(DateTime.local(2021, 1, 31), "months").months; // difference in months
DateTime.now().diff(DateTime.local(2021, 1, 31), "days").days; // difference in days
`}
          </LuxonBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <DayjsBox header="Manipulate">
            {`dayjs().add(7, "day"); // add 7 days
dayjs().add(1, "M"); // add 1 month (using shortform)

dayjs().subtract(7, "day"); // subtract  7 days
dayjs().subtract(1, "M"); // subtract 1 month (using shortform)

dayjs().diff("2021-06-05", "month"); // difference in mth (round down)
dayjs().diff("2021-06-05", "month", true); // diff in month in decimal 7.645...
`}
          </DayjsBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <MomentBox header="Display">
            {`moment().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA"); // "Sun, 3PM"
`}
          </MomentBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <LuxonBox header="Display">
            {`DateTime.now().toFormat("MM-dd-yyyy"); //  01-31-2022
DateTime.now().toFormat("MMMM dd, yyyy"); // January 31, 2022
DateTime.now().toFormat("EEE, ha"); //Mon, 11PM
`}
          </LuxonBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <DayjsBox header="Display">
            {`
dayjs().format() // current date in ISO8601 e.g.'2020-04-02T08:02:17-05:00'
dayjs('2019-01-25').format('YYYY-MM-DDTHH:mm:ssZ[Z]') 
// '2019-01-25T00:00:00-02:00Z'
dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
`}
          </DayjsBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <MomentBox header="Date Operator">
            {`// equal / same
moment("2010-10-20").isSame("2010-10-20"); // true
moment("2010-10-20").isSame("2009-12-31", "year"); // false
moment("2010-10-20").isSame("2010-01-01", "year"); // true

// before
moment("2010-10-20").isBefore("2010-10-21"); // true
moment("2010-10-20").isBefore("2010-12-31", "year"); // false
moment("2010-10-20").isBefore("2011-01-01", "year"); // true

// after
moment("2010-10-20").isAfter("2010-10-19"); // true
moment("2010-10-20").isAfter("2010-01-01", "year"); // false
moment("2010-10-20").isAfter("2009-12-31", "year"); // true
`}
          </MomentBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <LuxonBox header="Date Operator">
            {`// Luxon does not have a method for date operator. 
// Use standard operators to check date.
const d1 = DateTime.fromISO("2022-01-01");
const d2 = DateTime.fromISO("2022-01-02");

// isAfter
console.log(d2 < d1); //=> false

// isBefore
console.log(d2 > d1); //=> true

// isEqual
console.log(d2 === d1); //=> false
`}
          </LuxonBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <DayjsBox header="Date Operator">
            {`// equal / same
dayjs("2010-10-20").isSame("2010-10-20"); // true
dayjs("2010-10-20").isSame("2009-12-31", "year"); // false (compare by year)
dayjs("2010-10-20").isSame("2010-01-01", "year"); // true

// before
dayjs("2010-10-20").isBefore("2010-10-21"); // true
dayjs("2010-10-20").isBefore("2010-12-31", "year"); // false (compare by year)
dayjs("2010-10-20").isBefore("2011-01-01", "year"); // true

// after
dayjs("2010-10-20").isAfter("2010-10-19"); // true
dayjs("2010-10-20").isAfter("2010-01-01", "year"); // false (compare by year)
dayjs("2010-10-20").isAfter("2009-12-31", "year"); // true
`}
          </DayjsBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <MomentBox header="Others">
            {`//Get the number of days in the current month.
moment().daysInMonth();

// As ISO8601 String
moment().toISOString(); // 2013-02-04T22:44:30.652Z

// display as string
moment().toString(); // "Sat Apr 30 2016 16:59:46 GMT-0500"

// is LeapYear
moment().isLeapYear();

// is daylight savings time
moment().isDST();

// check if object is moment
moment.isMoment(new Date()); // false
moment.isMoment(moment()); // true
moment() instanceof moment; // true

// check if object is JavaScript Date
moment.isDate(new Date()); // true
moment.isDate(moment()); // false
`}
          </MomentBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <LuxonBox header="Others">
            {`//Get the number of days in the current month.
DateTime.now().daysInMonth;

// As ISO8601 String
DateTime.now().toISO(); //=> '2022-01-31T12:15:00.000Z'
DateTime.now().toISODate(); //=> '2022-01-31'

// display as string
DateTime.now().toString(); // 2022-02-01T00:13:26.390+08:00

// is LeapYear
DateTime.now().isInLeapYear;

// is daylight savings time
DateTime.now().isInDST;

// Check if value is Luxon's DateTime
DateTime.isDateTime(DateTime.now()); // true
DateTime.isDateTime(new Date()); // false
`}
          </LuxonBox>
        </WrapItem>
        <WrapItem w="32%" justifyContent="center">
          <DayjsBox header="Others">
            {`//Get the number of days in the current month.
dayjs().daysInMonth();

// As ISO8601 String
dayjs().toISOString(); // 2013-02-04T22:44:30.652Z

// display as string
dayjs().toString(); // "Sat Apr 30 2016 16:59:46 GMT-0500"

// is LeapYear
// possible with IsLeapYear Plugin
dayjs().isLeapYear();

// is daylight savings time
Not possible yet

// check if object is moment
dayjs.isDayjs(dayjs()); // true
dayjs.isDayjs(new Date()); // false
dayjs() instanceof dayjs; // true
`}
          </DayjsBox>
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default App;
