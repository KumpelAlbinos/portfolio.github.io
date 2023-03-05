
var phrase = "Kasjan ";
var age = 23;
var gpa = 5.2;
var isMale = true;
var flaws = null;
var description = undefined;

document.write( phrase );
document.write( phrase );
phrase=" apple";
document.write( age );
document.write( gpa );

//alert("Welcome");
document.write("<hr/>");
document.write("<h2 style='color:red'>sadasdsa</h2>");
var phrase = "Hello Yo RERE ";
var phrase1 = "SAD asd aKe ";
document.write( phrase.charAt(0) );
document.write("<h2 style='color:cyan'> phrase + phrase1 </h2>" );
document.write( phrase.endsWith("RERE ") );
document.write( phrase.includes("SSA ") );
document.write( phrase.indexOf("e") );
document.write( phrase.toUpperCase() );
document.write( phrase1.substring(phrase1.indexOf("S"), 2) );
document.write(10 / 5);
document.write(10 + 2 * (2 + 2));

var number = 2;
//min number 2-4 its 2
document.write( Math.min( number, 4) );
//max number 2-4 its 4
document.write( Math.max( number, 4) );
//abs srednia
document.write( Math.abs( number, 4) );
//#
document.write( Math.round( number, 4) );
//pow - potega
document.write( Math.pow( number, 3) );
//random number between 0-1
document.write( Math.random() );
//random whole number between 0-10
document.write( Math.round(Math.random() * 10));



/*"ABCDEFG"
   0123456 */
   

//user input
var name = window.prompt("What is your name?");
var age = window.prompt("How old are you?");
document.write("Hey "+ name + "!" + "<br> Do you like being " + age + " years old?");


//user input
var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");
//num
num1 = parseFloat(num1);
num2 = parseFloat(num2);
//writing num
document.write(num1+num2);

//Arrays - tabele
var fruits  = new Array("Apples", 24 , false );
document.write( fruits );

var fruits1 = "Apples, Oranges, Peaches";
fruits1 = fruits1.split(",")
document.write( fruits1[1] );

var fruits2  = new Array("Apples", "Oranges", "Peaches");
fruits2[0] = "Oranges"
document.write( fruits2[0] ); 

//typing name with age below it
function sayHI(name, age){
   document.write("<h1>Hello " + name +  "</h1>");
   document.write("<p>You are " + age + "</p>");
   //alert("Hey");
 }
 sayHI("Kasjan", 44);
 sayHI("Joe", 22);
 sayHI("Michael", 89); 
 
 //prints 104 (4+100=104) adding numbers
 function addition(num1, num2){
    return num1 + num2;
 }
 var addedNumbers = addition(4, 100);
 document.write( addedNumbers );
 

 //accesing html elements
var header = document.getElementById("header");
header.innerHTML = "New Website";
header.style.color = "red";


var link = document.getElementById("link");
link.href = "https://amazon.com";
link.style= "color:orange"

// alert clicked
function handleClick(){
   alert("clicked");
}


// changes text on button
function handleClick(element){
   element.innerHTML = "Clicked"
}


// changes background color of button
function handleClick(element){
   element.style="background-color:blue";
}
// making image bigger when mouse over,  when out back to normal size
var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
   this.style = "box-shadow: 2px 2px 2px grey";
   this.width = "350";
});

image.addEventListener("mouseout", function(){
   this.style = "";
   this.width = "200";
});

/*messaging app  HTML
      <ul id="messages"></ul>
      <input id="textbox" type="text">
      <button id="button">Send</button>*/
      var messages = document.getElementById("messages");
      var textbox = document.getElementById("textbox");
      var button = document.getElementById("button");
      
      button.addEventListener("click", function(){
          var newMessage = document.createElement("li");
          newMessage.innerHTML = textbox.value ;
          messages.appendChild(newMessage);
          textbox.value = "";
      });

      
//if statements
var isMale  = true;
var isTall = false;

if(isMale){
  document.write("You are male"); //true
} else{
    document.write("You are not male") //false
}
if(isTall){
    document.write(" You are tall"); //true
  } else{
      document.write(" You are not tall"); //false
  } 
  //ismale istall 'or' '&&' - and
  if(isMale && isTall){
    document.write("You are a tall male"); //true
  } else if(isMale && !isTall ){
    document.write("You are a short male");
  } else if(!isMale && isTall){
    document.write("You are not male, but you are tall");
  } else {
    document.write("You are not tall and not male"); //false
  }
  

  //if statements w/comparisons
function max(num1, num2, num3){
   if(num1 >= num2 && num1 >= num3){
       return num1;
   
    } else if(num2 >= num1 && num2>= num3){
       return num2;
    } else{
       return num3;
    }
   }
   document.write(max(3, 4, 5));
   
   if("phrase" == "phrase"){
   document.write("True");
   }

   
//Switch Statements
function getDayName(dayNum){
   var day;
  
   switch(dayNum){
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
          break;
          default:
              day = "Day doesn't exist, " + dayNum + " isn't a valid number";
  
   }
      return day;
  }
  document.write(getDayName(0));

  //objects
var person = {
   name: "Kasjan",
   age: 18,
   isMale: true,
   occupation: "programmer",
   printName: function(){
       document.write("<h1>"+ this.isMale +"</h1>");
   }
};
person.printName();


//Real world objects
var myMovie = {
   title: "The Social Network",
   realeaseYear: "2010",
   duration: 2.0,
   actors: [
       {
           name: "Jessie Eisenberg",
           birthday: new Date("October 5, 1983"),
           hometown: "New York, New York",
       },
       {
           name: "Roonie Mara",
           birthday: new Date("April 17, 1985"),
           hometown: "Bedford, New York",
       },
   ]

}

document.write(myMovie.actors[1].birthday);
