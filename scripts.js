document.addEventListener("DOMContentLoaded", function () {

    const signUpForm = document.getElementById('sign-up-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            
            window.location.href = 'index.html';
        });
    }

    
    const signInForm = document.getElementById('sign-in-form');
    if (signInForm) {
        signInForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            
            if (!storedEmail || !storedPassword) {
                alert('Please sign up before signing in.');
                return;
            }

            
            if (email === storedEmail && password === storedPassword) {
                
                window.location.href = 'welcome.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        const username = localStorage.getItem('username');
        welcomeMessage.textContent = `Welcome, ${username}`;
    }

   
    const forgetPasswordForm = document.getElementById('forget-password-form');
    if (forgetPasswordForm) {
        forgetPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;

            
            const storedEmail = localStorage.getItem('email');
            if (email === storedEmail) {
                alert('Password reset link sent to your email');
            } else {
                alert('Email not found');
            }
        });
    }
});

let totalBalance = 0;
let totalDeposit = 0;
let totalWithdraw = 0;

function updateDisplay() {
    document.getElementById("total").innerHTML = totalBalance.toFixed(2);
    document.getElementById("total-balance").innerHTML = totalBalance.toFixed(2);
    document.getElementById("dep").innerHTML = totalDeposit.toFixed(2);
    document.getElementById("with").innerHTML = totalWithdraw.toFixed(2);
}

function addDeposit() {
    const deposit = parseFloat(document.getElementById("deposit").value);
    if (!isNaN(deposit) && deposit > 0) {
        totalBalance += deposit;
        totalDeposit += deposit;
        updateDisplay();
    } else {
        alert("Please enter a valid deposit amount.");
    }
    document.getElementById("deposit").value = ''; 
}

function addWithdraw() {
    const withdraw = parseFloat(document.getElementById("withdraw").value);
    if (!isNaN(withdraw) && withdraw > 0) {
        if (withdraw <= totalBalance) {
            totalBalance -= withdraw;
            totalWithdraw += withdraw;
            updateDisplay();
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid withdraw amount.");
    }
    document.getElementById("withdraw").value = ''; 
}

var account = '';
function generateAC() {
    let accountNo = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let numLen = Math.floor(Math.random() * 12) + 10;
   

    for (let i = 0; i < numLen; i++) {
        let ranNum = Math.floor(Math.random() * accountNo.length);
        account += accountNo.charAt(ranNum);
    }
    
    alert(`Here is your A/C number ${account}`);
}


let dashboard=document.querySelector(".accountDetails");
function details(){
    let name1=document.getElementById("username").value;
let name2=document.getElementById("username2").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
    dashboard.style.display="block";
    document.getElementById('name').innerHTML=name1 + " "+ name2;
    document.getElementById('emailID').innerHTML=email;
    document.getElementById('phoneNo').innerHTML=phone;
    document.getElementById('a/c').innerHTML= account;
}
function closeDetails(){
    dashboard.style.display="none";
}