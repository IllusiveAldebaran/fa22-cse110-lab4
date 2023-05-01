

### Question 1

3

It will print 3 as it was the last value `i` was assigned int he for loop. Since it used `var` and the variable has a scope beyond where it was defined.


### Question 2

150

This is because again the `discountedPrice` variable was defined with `var`, so its scope extends outside the for loop. Because of this also then the last value it holds will be the half price of the $300 dollar item, the last item considered of the `prices[]` array seen in for loop.

I was worried it would have trailing characters of a float but seems to have just worked fine and did not have them.

### Question 3

150

This time it is a variable accessed int the same area as it was defined, so even the same word defined with `let` would of worked just fine. This time the last time it was modified was when it was assigned teh value of `finalPrice`, with some rounding, so it has that value.


### Question 4

[ 50, 100, 250 ]

The function returns an array, of what I assume to be defaulted to an array of objects. This specific time it returns the array of discounted prices, so would return the array given above.

### Question 5

This will result in an error because `i` was declared with `let`, which means the scope is limited to the for loop. It is not defined here and so is an error.


### Question 6

Again the discounted price is defined with `let`, so the scope of the variable is limited to the for loop and it throws an error when it is called outside of it.

### Question 7

150

Since the variable is in the same scope it prints just fine. It prints the last value `finalPrice` was changed to hold: 150.

### Question 8

[ 50, 100, 250 ]

The function returns an array. And again this returns the same as before because the scope of the the array is what is known at the return function since `let` was used and it is literally still inside the same function.

### Question 9

Like Question 5 this will be an error for the same reason. The scope of `i` defined with `let` is limited to the for loop so results in an error.


### Question 10

3

The constant is not tried modified so it's good. It just prints the value.


### Question 11


[ 50, 100, 150 ]

It again returns the array just like before. I am honestly surprised because I would of thought that having an array with `const` would mean that it could not add values, but here it seems to have done just that.

## Data Types


### Question 12

A. student.name
B. let key = "Grad Year"
   student[key]
   // or
   student["Grad Year"]
C. student.greeting()
C. student["Favorite Teacher"].name
D. student.courseLoad[0]


### Question 13

‘3’ + 2
Outputs: 32
Because: Converts the 2 into a string and just concatenates.

‘3’ - 2
Outputs: 1
Because: Since '-' operator is just a math operator it converts the string '3' to a number 3, then subtracts 2.

3 + null
Outputs: 3null
Because: The '+' operator prompts the number 3 and null to become the string '3' and 'null'

‘3’ + null
Outputs: 3null
Because: Again the '+' operator prompts the null to become the string 'null', while '3' was already a string.

true + 3
Outputs: 4
Because: true is converted into the number 1, then it is an addition of 1+3

false + null
Outputs: 0
Because: Both types are converted to the number 0, so it is 0+0

'3' + undefined
Outputs: 3undefined
Because: Sees a string and it concatenates so it converts undefined into the string 'undefined', then it just concatenates these.

'3' - undefined
Outputs: NaN
Because: Trying to subtract these does not work because although '3' can be converted int a number undefined has no value it converts to, so it is Not a Number.

### Question 14


‘2’ > 1
Outputs: true
Because: '2' converts to 2, so 2>1 is true

‘2’ < ‘12’
Outputs: false
Because: '2' and '12' are both strings so they are compared as strings. The first character '2' is greather than '1' therefore statement is false.

2 == ‘2’
Outputs: true
Because: Since there is a number '2' is implicitly converted into the number 2. And 2 is equal to 2.

2 === ‘2’
Outputs: false
Because: Having the triple equal sign also compares the type. A number is clearly not the same type as a number.

true == 2
Outputs: false
Because: Since there is a number here true is impliclty converted to 1, and the number 1 is not equal to 2.

true === Boolean(2)
Outputs: true
Because: The boolean of 2 is created, and like in C nonzero numbers are true in this respect, so true == true and since it's a Boolean they are also the same type.

### Question 15

== is an equality check but === is a 'strict equality checker' so it also checks that they are the same type. So although sometimes a variable may be implicitly converted with a strict equality checker this checks the type and doesn't check the converted variable(s).

### Question 16

Added the file

### Question 17

This will return an array with the elements. This I can see because it inputs the array and the name of the function doSomething. In the for loop every item is selected with array[i], and callback just ends up being the actual name of the of teh function doSomething. Pretty neat, and something that feels dirty after programminging in other languages.

### Question 18

Added the file.

### Question 19

1
4
3
2


