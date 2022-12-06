//Variables
let radios = document.querySelectorAll('input[name="choice"]'); //Hold the radio buttons
let event1 = document.getElementById("Cels");
let event2 = document.getElementById("Fah");

//Function to set event listeners to radio buttons
for(const radioButton of radios){
    radioButton.addEventListener('change', showArea);
}

//Function to show input area
function showArea(e){

    //Get the radio buttons input
    let cel_picked = document.getElementById("C");
    let fah_picked = document.getElementById("F");

    if(this.checked){

        if(cel_picked.checked){
            document.getElementById("getCel").style.display = "block";
            document.getElementById("getFah").style.display = "none";
            event1.addEventListener('mouseout', calculate_cel); //On the picking background color
        
        }

        else if(fah_picked){
            document.getElementById("getFah").style.display = "block";
            document.getElementById("getCel").style.display = "none";
            event2.addEventListener('mouseout', calculate_fah);
           
        }
    }
}

//Function to calculate the weather
function calculate_cel(){

    let cel_input = document.getElementById("Cels").value;
    let result;

    result = Math.ceil((cel_input * (9/5)) + 32);
    document.getElementById("Result").innerHTML = `${cel_input}&#x2103; is equal to ${result}&#x2109;`;
    change_background_fahr(result);
    document.getElementById("results").style.display = "block";
}

function calculate_fah(){
    let fah_input = document.getElementById("Fah").value;
    let result;

    result = Math.ceil((fah_input - 32) * (5/9));
    document.getElementById("Result").innerHTML = `${fah_input}&#x2109; is equal to ${result}&#x2103;`;
    change_background_celsius(result);
    document.getElementById("results").style.display = "block";
}

//Function to change the background
function change_background_celsius(weather){

    if(weather >= 32){
        document.getElementById("hot").style.visibility = "visible";
        document.getElementById("cold").style.visibility = "hidden";
        document.getElementById("header_color").style.color = "white";
    }

    else{
        document.getElementById("cold").style.visibility = "visible";
        document.getElementById("hot").style.visibility = "hidden";
        document.getElementById("header_color").style.color = "white";
    }
}

//Function to change the background
function change_background_fahr(weather){

    if(weather >= 90){
        document.getElementById("hot").style.visibility = "visible";
        document.getElementById("cold").style.visibility = "hidden";
        document.getElementById("header_color").style.color = "white";
    }
    else{
        document.getElementById("cold").style.visibility = "visible";
        document.getElementById("hot").style.visibility = "hidden";
        document.getElementById("header_color").style.color = "white";
    }
}

