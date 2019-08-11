# DateLib
adds a wrapper for the date object that gives it some useful features

## Definition Parameters
D can be defined in every way that a date object can be defined, including leaving it empty to get the current date.  

more information about this can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Parameters)

## Getters
* __D.year__  
  returns the year based on users location
  ```js
  d.year // => 2019
  ```
* __D.month__  
  returns the month based on the users location
  ```js
   d.month // => March
  ```
* __D.monthNum__  
  returns the Number of the month based on the users location, using 0 indexing, meaning January is month 0  
  range is 0 - 11
  ```js
   d.monthNum // => 2
  ```
* __D.day__  
  returns the day of the month based on the users location  
  range is 0-30
  ```js
   d.day // => 23
  ```
* __D.hour__  
  returns the hour based on the users location  
  range is 0-23
  ```js
   d.hour // => 9
  ```
* __D.minute__  
  returns the minute based on the users location  
  range is 0-60
  ```js
   d.minute // => 34
  ```
* __D.second__  
  returns the second based on the users location  
  range is 0-60
  ```js
   d.second // => 12
  ```
* __D.mili__  
  returns the milisecond based on the users location  
  range is 0-999
  ```js
   d.mili // => 257
  ```

## Methods
* __D.format(formString)__  
  The format method returns a formated string to exact specifications  
  formString can be any string you like with special characters (listed below) repersenting different parts of the date.  
  For example the American standard would be
  ```js 
  myDate.format("M-d-Y") //=> "August-4-2019"
  ```
  You can have any seperator you would like as well as any order of characters, and repeat characters.
  ```js
  myDate.format("M:D:y") //=> "August:04:19"
  myDate.format('Y-M-D h:I:S')) // => 2017-January-02 3:04:05
  ```
  formString is optional and if left empty will default to ```"M D Y"```

  The special characters are as listed
  ```js
  {
  'Y': 2019, // formal year
  'y': 19, // informal year
  'M': "July", // formal month
  'm': "Jul", // informal month
  'D': 01, // formal day
  'd': 1, //informal day
  'H': 05, // formal hour
  'h': 5, // informal hour
  'I': 08, // formal minute
  'i': 8, //informal minute
  'S': 04, // formal second
  's': 4, //informal second
  }
  ```
* __`D.when(relativeTo)`__  
  the when method returns a string repersenting a rough estimate of the time between the D object and the relativeTo object which is also a D.  
  relativeTo is optional and if left empty will default to the current date.
  ```js
  myDate.when() // => "6 months ago"
  aDifferentDate.when() // => "4 months from now"
  b.when() // => "2 days ago"
  c.when() // => "1 year ago"
  ```

  