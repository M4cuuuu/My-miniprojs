function hts(hours) {

    hours = prompt("Please enter the number of hour/s you want to convert");
    
    while(isNaN(hours)){

        hours = prompt("Please input hours in number/s");
        
     } 
    
    let result = hours * 60 * 60;

    alert(`${hours} hour/s was ${result} seconds`);

    
}

function htm(hours) {

    hours = prompt("Please enter the number of hour/s you want to convert");

    while(isNaN(hours)){

        hours = prompt("Please input hours in number/s");
        
     } 

    let result = hours * 60;

    alert(`${hours} hour/s was ${result} minutes`);
}

function htd(hours) {

    hours = prompt("Please enter the number of hour/s you want to convert");

    while(isNaN(hours)){

        hours = prompt("Please input hours in number/s");
        
     } 
    let result = hours / 24 ;

    alert(`${hours} hour/s was ${result} days`);
}

function mts(minutes) {

    minutes = prompt("Please enter the number of minute/s you want to convert");

    while(isNaN(minutes) || minutes == 0){

        minutes = prompt("Please input minutes in number/s");
        
     } 
    let result = minutes * 60;

    alert(`${minutes} minute/s was ${result} second/s`);
}

function mth(minutes) {

    minutes = prompt("Please enter the number of minute/s you want to convert");

    while(isNaN(minutes) || minutes == 0){

        minutes = prompt("Please input a number/s");
        
     } 
    let result = minutes / 60;

    alert(`${minutes} minute/s was ${result} hour/s`);
}
function mtd(minutes) {

    minutes = prompt("Please enter the number of minute/s you want to convert");

    while(isNaN(minutes) || minutes == 0){

        minutes = prompt("Please input a number/s");
        
     } 
    let result = minutes / 60 / 24;

    alert(`${minutes} minute/s was ${result} day/s`);
}

function sth(seconds) {

    seconds = prompt("Please enter the number of second/s you want to convert");

    while(isNaN(seconds) || seconds == 0){

        seconds = prompt("Please input a number/s");
        
     } 
    let result = seconds / 60 / 60;

    alert(`${seconds} second/s was ${result} hour/s`);
}

function stm(seconds) {

    seconds = prompt("Please enter the number of second/s you want to convert");

    while(isNaN(seconds) || seconds == 0){

        seconds = prompt("Please input a number/s");
        
     } 
    let result = seconds / 60;

    alert(`${seconds} second/s was ${result} minute/s`);
}

function std(seconds) {

    seconds = prompt("Please enter the number of second/s you want to convert");

    while(isNaN(seconds) || seconds == 0){

        seconds = prompt("Please input a number/s");
        
     } 
    let result = seconds / 60 / 60 / 24;

    alert(`${seconds} second/s was ${result} days`);
}