
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentMonth=0;
var currentYear=0;
var d= new Date();
currentMonth=d.getMonth();
currentYear=d.getFullYear();

function initialise(){
        document.getElementById("thismonth").innerHTML=months[currentMonth]+ "  " + currentYear;
   
        var DaysInMonth = function(currentMonth,currentYear){
            return new Date(currentYear,currentMonth,0).getDate();
        }
        var firstday;
        var dt=new Date().toDateString();
         firstday=dt.substr(0,3);
        var dayname=["Su","Mo","Tu","We","Th","Fr","Sa"];
        var Dayno= dayname.indexOf(firstday);
        var DIM=DaysInMonth(currentMonth,currentYear);

        function cal(dayno,DIM){
            var table=document.createElement('table');
            var tr=document.createElement('tr');

            for(var i=0;i<=6;i++){
                td=document.createElement('td');
                td.innerHTML="SMTWTFS"[c];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

//        table=document.createElement('table');
//         if(DIM===31){
//             for(var i=0;i<=6;i++){
//                 var row=document.createElement('tr');
//                 for(var j=1;j<=7;j++){
//                     var cell=document.createElement('td');
//                     var celltext=document.createTextNode("1");
//                     cell.appendChild(celltext);
//                 }
//             }row.appendChild(cell);
            
//         }table.appendChild(row);
 }    



function previous(){
    if(currentMonth===0){
        
        currentMonth=11;
        currentYear=currentYear-1;
    }
    else if(currentMonth>0){
        currentMonth=currentMonth-1;
 }
 document.getElementById("thismonth").innerHTML=months[currentMonth]+ "  " + currentYear;
}


function next(){
    if(currentMonth<11){
        
        currentMonth=currentMonth+1;
    }
    else if(currentMonth === 11){
        currentMonth=0;
        currentYear=currentYear+1;     
    }
    document.getElementById("thismonth").innerHTML=months[currentMonth]+ " " +currentYear;
}


        


