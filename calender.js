var z,p,jump;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentMonth=0;
var currentYear=0;
var d= new Date();
var t=d.getHours()+":"+d.getMinutes();
var today=d.getDate();
currentMonth=d.getMonth();
currentYear=d.getFullYear();
var firstdate=months[currentMonth]+ " " + 1 + " " + currentYear;

//writes dates in calender
function getDays(){
      for(var i=7;i<=48;i++){
          document.getElementById(i).innerHTML = null;
      }
    var DaysInMonth = function(currentMonth,currentYear){
        return new Date(currentYear,currentMonth,0).getDate();
    }
   var DIM=DaysInMonth(currentMonth+1,currentYear);
       // var dt=new Date(firstdate).toDateString();
       var firstday=new Date(currentYear,currentMonth,1);
        var firstday=firstday.getDay();
        var dayname=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       //var Dayno= dayname.indexOf(firstday);
        firstday +=7;
        for(var i=1;i<=DIM;i++){
            document.getElementById(firstday).innerHTML=i;
            
            firstday++;
        }
        
        nextdates();
        prevdates();
}
//writes previous months dates in currntmonths empty cells
function  prevdates(){
var lastDaysOfLastMonth=new Date(currentYear,currentMonth-1,1);
var DaysInMonth = function(currentMonth,currentYear){
    return new Date(currentYear,currentMonth,0).getDate();
}
var DIPM=DaysInMonth(currentMonth,currentYear);

m=DIPM;
for(var i=13;i>=7;i--){
       
    p= document.getElementById(i).innerHTML;
    if(p==""){
        document.getElementById(i).style.backgroundColor="gray";

        document.getElementById(i).innerHTML=m;
        m--;
    }
    else{
        document.getElementById(i).style.backgroundColor="black"; 
    }
}
}

////writes nextmonths months dates in currntmonths empty cells
function nextdates(){
    var d=1;
    for(var i=35;i<=48;i++){
       
       p= document.getElementById(i).innerHTML;
       if(p==""){
        document.getElementById(i).style.backgroundColor="gray";
       
               document.getElementById(i).innerHTML=d;
          jump=document.getElementById(i).innerHTML;
          document.getElementById(i).onclick=function(){
            next();

        }
           d++;
       }
       else{
        document.getElementById(i).style.backgroundColor="black"; 
    }
    }}
 

//on load shows monthand year in nav
function initialise(){
        document.getElementById("thismonth").innerHTML=months[currentMonth]+ "  " + currentYear;
   
        var DaysInMonth = function(currentMonth,currentYear){
            return new Date(currentYear,currentMonth,0).getDate();
        }
        var DIM=DaysInMonth(currentMonth+1,currentYear);
        var dt=new Date(firstdate).toDateString();
        var firstday=dt.substr(0,3);
        var dayname=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       // creates days  
        for(var i=0;i<=6;i++){
            document.getElementById(i).innerHTML=dayname[i]; 
        }
      
      //creates td dynamically
      var k=7;
            var table =document.getElementById("table");
           for(var i=0;i<=5;i++){   
            var tr=document.createElement('tr');
            
            for(var j=0;j<=6;j++){
            var td=document.createElement('td');
            td.setAttribute("id",k);
          
            td.onclick =function() {  z=$(this).text(); mesg(); };
    

            k++; 
            tr.appendChild(td);
           
            }
            table.appendChild(tr); 
           
            }
            
            getDays();
            
            for(i=7;i<=48;i++){
               var x= document.getElementById(i).innerHTML;
               var bgcolor=document.getElementById(i).style.backgroundColor;
               var d= new Date();
               var thisMonth=d.getMonth();
                if(x==today && thisMonth==currentMonth && bgcolor=="black"){
                    document.getElementById(i).style.backgroundColor = "lightblue";
                }
            }   
            
           
}
//it promts the message which you want to save on particular date and shows in p as you click on ok.
function mesg(){
 
    if(z!=""){
var cur=months[currentMonth];
var d= new Date();
var t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    
    var msg= prompt("write Your Schedule for this Day:");
        document.getElementById("message").innerHTML=z+" "+cur+" " +t+" " + msg;
      
          /* document.getElementById("message").innerHTML +="<b>"+msg+"</b>";
          document.getElementById("message").contentEditable=true; */
         
              
          
    }  
  }  

 
 
// to get previous months dates onclicking < button
function previous(){

    if(currentMonth===0){
        
        currentMonth=11;
        currentYear=currentYear-1;
    }
    else if(currentMonth>0){
        currentMonth=currentMonth-1;
 }
 document.getElementById("thismonth").innerHTML=months[currentMonth]+ "  " + currentYear;
 getDays();

var d1= new Date();
var m=d1.getMonth();
m= months[m];
var y=d1.getFullYear();
var add= m + "  " + y;
var s=document.getElementById("thismonth").innerHTML;
if(add == s){
    for(i=7;i<=48;i++){
        var x= document.getElementById(i).innerHTML;
        var bgcolor=document.getElementById(i).style.backgroundColor;
        var d= new Date();
        var thisMonth=d.getMonth();
         if(x==today && thisMonth==currentMonth && bgcolor=="black"){
             document.getElementById(i).style.backgroundColor = "lightblue";
         }
     }
}
/* else
{
    for(i=7;i<=48;i++){
             document.getElementById(i).style.backgroundColor = "black";
            
     }
    
} */

}

// to get next months dates onclicking > button
function next(){
    if(currentMonth<11){
        
        currentMonth=currentMonth+1;
    }
    else if(currentMonth === 11){
        currentMonth=0;
        currentYear=currentYear+1;     
    }
    document.getElementById("thismonth").innerHTML=months[currentMonth]+ " " +currentYear;
    getDays();


    var d1= new Date();
var m=d1.getMonth();
m= months[m];
var y=d1.getFullYear();
var add= m + " " + y;
var s=document.getElementById("thismonth").innerHTML;
if(add === s){
    for(i=7;i<=48;i++){
        var x= document.getElementById(i).innerHTML;
        var bgcolor=document.getElementById(i).style.backgroundColor;
        var d= new Date();
        var thisMonth=d.getMonth();
         if(x==today && thisMonth==currentMonth && bgcolor=="black"){
             document.getElementById(i).style.backgroundColor = "lightblue";
         }
     }
}
/* else
{
    for(i=7;i<=48;i++){
       
             document.getElementById(i).style.backgroundColor = "black";
         
     }
} */
    
}


        


