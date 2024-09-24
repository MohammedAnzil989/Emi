/*document.querySelectorAll('input[type="number"]').forEach (inputNumber =>{
 inputNumber.oninput = () => {
    if(inputNumber.value.length > inputNumber.maxLength)
        inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
 };
});
let loanAmount = document.getElementById('amount');
let loanInterest = document.getElementById('Interest');
let loanTenure = document.getElementById('loanTenure');
let calculate = document.getElementById('calculate');

calculate.onclick = (e) =>{
    e.preventDefault();
     
    let isYear = document.getElementById('year').checked;
    let isMonth = document.getElementById('month').checked;
    let noOfMonths = 0;

    if(!isYear && !isMonth){
        alert('please select loan tenure type: month or year');
    }else{

       if(isYear==true){
          noOfMonths = loanTenure.value * 12;
    }else{
        noOfMonths = loanTenure.value;
    }
    let r = parseFloat(loanInterest.value)/12/100;
    let p = (loanAmount.value);
    let n = noOfMonths;

    let emi = (p * r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
    let totalInterest = (emi*n)-p;
    let totalPayment = totalInterest+parseFloat(p) ;

    document.getElementById("emi").innerHTML = '₹'+ Math.round(emi);
    document.getElementById("toatalInterest").innerHTML ='₹' + Math.round(totalInterest);
    document.getElementById("toatalPayment").innerHTML ='₹' + Math.round(totalPayment);
}
};*/
document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) {
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
        }
    };
});

let loanAmount = document.getElementById('amount');
let loanInterest = document.getElementById('Interest');
let loanTenure = document.getElementById('loanTenure');
let calculate = document.getElementById('calculate');

calculate.onclick = (e) => {
    e.preventDefault();

    let isYear = document.getElementById('year').checked;
    let isMonth = document.getElementById('month').checked;
    let noOfMonths = 0;

    if (!isYear && !isMonth) {
        alert('Please select loan tenure type: month or year');
        return;
    }

    if (isYear) {
        noOfMonths = loanTenure.value * 12;
    } else {
        noOfMonths = loanTenure.value;
    }

    let r = parseFloat(loanInterest.value) / 12 / 100;
    let p = parseFloat(loanAmount.value);
    let n = noOfMonths;

    if (isNaN(p) || isNaN(r) || isNaN(n) || n <= 0) {
        alert('Please enter valid numeric values for loan amount, interest, and tenure.');
        return;
    }

    let emi = (p * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    let totalInterest = (emi * n) - p;
    let totalPayment = totalInterest + p;

    document.getElementById("emi").innerHTML = '₹' + Math.round(emi);
    document.getElementById("totalInterest").innerHTML = '₹' + Math.round(totalInterest);
    document.getElementById("totalPayment").innerHTML = '₹' + Math.round(totalPayment);
};