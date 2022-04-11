var tips = document.querySelectorAll('.tip');
var input_bill_value = document.getElementById('bill-amount-input').value;
var input_nb_people_value = document.getElementById('people-number').value;
var input_bill = document.getElementById('bill-amount-input');
var input_nb_people = document.getElementById('people-number');
var total_amount = document.getElementById('total-amount');
var tip_amount = document.getElementById('tip-amount');
var reset_button = document.querySelector('.reset-button');
var selected_tips;

tips.forEach( btn => {
    btn.addEventListener('click', addSelectNumber);
});


function addSelectNumber(event){
    console.log(event)
    tips.forEach( btn => {
        btn.classList.remove('selected');
    });
    if (event.target.classList.contains('selected')){
        event.target.classList.remove('selected');
    } else {
        event.target.classList.add('selected');
    }
    selected_tips = event.target.innerText;
    input_bill_value = document.getElementById('bill-amount-input').value;
    input_nb_people_value = document.getElementById('people-number').value;
    if (input_bill_value != '' && input_nb_people_value != ''){
        calculateTip();
    }
}

input_bill.addEventListener('click', billInput);
function billInput(event){
    // test if input is click and calculate tip
    if (event.target.value != '' && input_nb_people_value != '' && selected_tips != undefined){
        calculateTip();
    }
}

function calculateTip(){
    // calculate tip
    let tip;
    switch (selected_tips) {
        case "5%":
            tip = 0.05;
            break;
        case "10%":
            tip = 0.1;
            break;
        case "15%":
            tip = 0.15;
            break;
        case "25%":
            tip = 0.25;
            break;
        case "50%":
            tip = 0.50;    
            break;
        default:
            break;
    }
    let res = (input_bill_value * tip);
    tip_amount.innerHTML = (`$${res}`);
    total_amount.innerHTML = (`$${res / input_nb_people_value}`);
}

reset_button.addEventListener('click', reset);
function reset(){
    // reset all values input
    input_bill.value = '';
    input_nb_people.value = '';
    tip_amount.innerHTML = '';
    total_amount.innerHTML = '';
    tips.forEach( btn => {
        btn.classList.remove('selected');
    });
}