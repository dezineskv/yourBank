// get password for login page
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function() {

// now we'll add validation to check if email & pw values exist else show an alert
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
    
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    

    // add event listener for deposit by getting the deposit input value & target the h2 span tags for dollar amounts
    const depositButton = document.getElementById("depositBtn");
    depositButton.addEventListener("click", function() {

        // get deposit input value
        const amount = document.getElementById("depositAmount").value;
        const depAmountNum = parseFloat(amount);

        // get initial/current balance
        const current = document.getElementById("currentBalance").innerText;
        const currentNumber = parseFloat(current);

        const total = currentNumber + depAmountNum;

        // updating current balance text with new input amount sum
        document.getElementById("currentBalance").innerText = total;

        // get deposit content value     
        const deposit = document.getElementById("depositAdd").innerText;
        const depositNumber = parseFloat(deposit);

        // update the value with the deposit amount
        document.getElementById("depositAdd").innerText = depAmountNum;
        // clear the deposit input field
        document.getElementById("depositAmount").value = '';
        
    })

    // & add event listener for withdraws by getting the input value & target the h2 span tags for dollar amounts
    const withdrawButton = document.getElementById("withdrawBtn");
    withdrawButton.addEventListener("click", function() {
        // const depositNumber = document.getElementById("depositAmount");

        // console.log(depositNumber) deposit input value
        const wAmount = document.getElementById("withdrawAmount").value;
        const wAmountNum = parseFloat(wAmount);

        // get initial/current balance
        const current = document.getElementById("currentBalance").innerText;
        const currentNumber = parseFloat(current);

        const total = currentNumber - wAmountNum;

        // add a condition to check if the balance is negative, if it is prevent action with an alert window
        if (total <= 0) {
            alert("Your account has reached zero or negative balance for the given amount. Please make a deposit or withdraw within the current balance.")
        } else {
        
            // updating current balance text with new input amount sum
            document.getElementById("currentBalance").innerText = total;

            // update the value with the deposit amount
            document.getElementById("currentWithdraw").innerText = wAmountNum;
            // clear the withdraw input field
            document.getElementById("depositAmount").value = '';
        }
      
        // clear the deposit input field
        document.getElementById("wAmount").value = '';
    })
})
