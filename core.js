document.getElementById('loan-form').addEventListener('submit', function(e){
    
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 1000);
    e.preventDefault();
});

const card = document.querySelector('.card');
const heading = document.querySelector('.card-title');
const btnsubmit = document.querySelector('#submitnow');
function calculateResults() {

   
    const loanAmount = document.querySelector('#loanAmount');
    const interest = document.querySelector('#interest');
    const toalYears = document.querySelector('#yearsToPay');
    //The result below
    const emi = document.querySelector('#monthlyPayment');
    const totalPay = document.querySelector('#totalRepayment');
    const totalInterest = document.querySelector('#totalInterest');

    const principal = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(toalYears.value)*12;
    
    //monthly payments
    const x = Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    //set values
    if(isFinite(monthly)){
        emi.value = monthly.toFixed(2);
        totalPay.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }else{
        console.log('check numbers entered');
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
        setTimeout(alertErros, 1500);
        
        
    }
    function alertErros() {
        document.getElementById('loading').style.display = 'none';

        var ji = card.childNodes;
        var j= document.createElement('div');
        
        j.className = 'alert alert-danger ';

        j.setAttribute('rote', 'alert');

        j.innerHTML = '! Plase Enter All the Values';

        card.insertBefore(j, heading);

        //clear Error after sometime
        setTimeout(noError, 3000);
        disableWhile();
    }
    function noError() {
        document.querySelector('.alert').remove();
    }
    
    function disableWhile() {
        btnsubmit.setAttribute("disabled", '');
        setTimeout(reEnable,5000);

    }
    function reEnable() {
        
        btnsubmit.removeAttribute('disabled');
    }

}



