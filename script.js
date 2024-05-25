// Question 1
var city = prompt("Enter a city name")
if (city == "karachi")
{
    alert("Welcome to city of light")
}
else if (city == "lahore")
{
    alert("Welcone to the city of Garden")
}
else
{
    alert("Invalid city")
}

// Question 2
var Gender = prompt("Enter your Gender")
if (Gender == "male")
{
    alert("Good Morning Sir")
}
else if  (Gender == "female" )
{
    alert("Good Morning Ma'am")
}
else
{
    alert("Invalid Gender")
}

// Question 3

var signal_color = prompt("Enter color")
if (signal_color == "red")
{
    alert("Must Stop")
}
else if (signal_color == "yellow")
{
    alert("Ready to move")
}
else if (signal_color == "green")
{
    alert("Move now")
}
else
{
    alert("Invalid color")
}

// Question 4
var fuel = +prompt("Enter your remaining fuel")
if(fuel < "0.25")
{
    alert("Please refill the fuel in your car")
}
else
{
    alert("Go away you have enough fuel")
}
//Question 5
document.write("<h1>MARKS</h1>")
var total=+prompt("enter total  marks:")
document.write("Total marks :",total)
 var sub1=+prompt("enter your first subject marks:")
 var sub2=+prompt("enter your second subject marks:")
 var sub3=+prompt("enter your third subject marks:")
 var obtained=sub1+sub2+sub3
document.write("</br>Marks  obtained :",obtained,)
var percent=(obtained/total)*100
document.write("</br>Percentage :",percent,"%")
if(percent>="80")
{
  document.write("</br>Grade : A-one ")
  document.write("</br>Remarks : Excellent")
}
else if(percent>="70")
{
document.write("</br>Grade : A")
  document.write("</br>Remarks : Good")
}
else if(percent>="60")
{
  document.write("</br>Grade : B ")
  document.write("</br>Remarks : You need to improve")
}
else if(percent<"60")
{
  document.write("</br>Fail ")
  document.write("</br>Sorry!!")
}
else
{
    document.write("Absent")
}

// LINE BREAK
document.write("<hr/>")

// Question 6
var secret_num = 9
var guess_num = +prompt("Enter secret number :")
if(guess_num === secret_num)
{
    document.write("Bingo! Correct Answer")
}
else if(guess_num === 1+secret_num)
{
    document.write("Close enough to the correct answer")
}
else
{
    document.write("Try again!")
}

 // LINE BREAK
 document.write("<hr/>")

  // Question 7
  var num=+prompt("enter a number")
  if(num%3==0)
  {
    document.write("it is divisible by 3")
}
else if(num%3!=0)
{
    document.write("it is  not divisible by 3")
}
else
{
    document.write("invalid Value")

}
