var literalarray = []
//  var objectarray = new array();
var stringarray = ["apple", " banana", "mango "];
document.write(stringarray);
var numarray = [1, 3, 6, 8]
var booleanarray = [true, false]
var mixedarray = ["apple", 3, true]

document.write("</br>");
document.write(numarray);
document.write("</br>");
document.write(booleanarray);
document.write("</br>");
document.write(mixedarray);
document.write("</br>"); document.write("</br>");
var qualification = ["SSC ", "HSC", " BCS ",
    " BS", " BCOM", " MS", "M. Phil", " PhD"]

document.write("<ol>");
document.write("<li>" + qualification[0] + "</li>");
document.write("<li>" + qualification[1] + "</li>");
document.write("<li>" + qualification[2] + "</li>");
document.write("<li>" + qualification[3] + "</li>");
document.write("<li>" + qualification[4] + "</li>");
document.write("<li>" + qualification[5] + "</li>");
document.write("<li>" + qualification[6] + "</li>");
document.write("<li>" + qualification[7] + "</li>");



document.write("</ol>");
document.write("</br>"); document.write("</br>");

var studentname = ["Michel", " John ", "Tony "]
var score = [320, 230, 480]
var totalmarks = [500]
var percentage1 = (score[0] / totalmarks) * 100;
var percentage2 = (score[1] / totalmarks) * 100;
var percentage3 = (score[2] / totalmarks) * 100;

document.write(" score of " + studentname[0] + " is " + score[0] + " percentage ; " + percentage1);
document.write("</br>");
document.write(" score of " + studentname[1] + " is " + score[1] + " percentage ; " + percentage2);
document.write("</br>");
document.write(" score of " + studentname[2] + " is " + score[2] + " percentage ; " + percentage3);
document.write("</br>");
document.write("</br>");

var student = [320, 230, 480, 120]
student.sort();
document.write(student);
document.write("</br>");
document.write("</br>");

var cities = [" karachi ", " lahore", " islamabad ", "queta", "peshawar"]
var selected = cities.slice(2, 4)
document.write(cities);
document.write("</br>");
document.write(selected);
document.write("</br>");
document.write("</br>");
var sen = ["This", " is ", "my ", "cat"]
var join = sen.join("");
document.write(join);
document.write("</br>");
document.write("</br>");

var devices = ["keyboard", "mouse ", "printer ", "monitor"]
document.write(devices);
document.write("</br>");
document.write("</br>");
var first = devices.shift()
document.write("out:" + "</br>" + first);
document.write("</br>");
var second = devices.shift()
document.write("out:" + "</br>" + second);
document.write("</br>");
var third = devices.shift()
document.write("out:" + "</br>" + third);
document.write("</br>");
var forth = devices.shift()
document.write("out:" + "</br>" + forth);

document.write("</br>");
document.write("</br>");

var devices = ["keyboard", "mouse ", "printer ", "monitor"]
document.write(devices);
document.write("</br>");
document.write("</br>");
var first = devices.pop()
document.write("out:" + "</br>" + first);
document.write("</br>");
var second = devices.pop()
document.write("out:" + "</br>" + second);
document.write("</br>");
var third = devices.pop()
document.write("out:" + "</br>" + third);
document.write("</br>");
var forth = devices.pop()
document.write("out:" + "</br>" + forth);

document.write("</br>");
document.write("</br>");

var manufacture = ["Apple", "samsung ", "Motrola", "Nokia ", "Sony ", "Haier"]
document.write("<select>")
document.write(' <option value =  " ' + manufacture[0] + ' "> ' + manufacture[0] + "</option>");
document.write(' <option value =  " ' + manufacture[1] + ' "> ' + manufacture[1] + "</option>");
document.write(' <option value =  " ' + manufacture[2] + ' "> ' + manufacture[2] + "</option>");
document.write(' <option value =  " ' + manufacture[3] + ' "> ' + manufacture[3] + "</option>");
document.write(' <option value =  " ' + manufacture[4] + ' "> ' + manufacture[4] + "</option>");
document.write(' <option value =  " ' + manufacture[5] + ' "> ' + manufacture[5] + "</option>");
document.write("</select>");

document.write("</br>");
document.write("</br>");

var colors = [ "red" , "green " , "blue" , "purple ", " orange"]

document.write ( colors);
document.write("</br>");
document.write("</br>");

 var bigningadd = prompt ( " what color do you enat to add in the biggning of array");  
 colors.unshift (bigningadd)
 document.write (colors);
 document.write("</br>");
 document.write("</br>");

 var endadd = prompt ( " what color do you enat to add in the biggning of array");  
 colors.push (endadd)
 document.write (colors);
 document.write("</br>");
 document.write("</br>");

 colors.unshift ("pink")
 colors.unshift ("white")
 document.write (colors);
 document.write("</br>");
 document.write("</br>");
  colors.shift ()
  document.write (colors);
 document.write("</br>");
 document.write("</br>");
 colors.pop ()
  document.write (colors);
 document.write("</br>");
 document.write("</br>");
 
 var position = prompt ("in which index do you want to add a color");
 var col = prompt ("in which color do you want to add a color");
 colors.splice (position , 0 , col)
 document.write (colors);
 document.write("</br>");
 document.write("</br>");
 
  var index = prompt ("in which index  from do you want to remove a color");
 var num = prompt ("how many colors do you want to delete from that index");
 colors.splice (index,num) 
 document.write (colors);
 document.write("</br>");
 document.write("</br>");
 
 
