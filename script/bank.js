document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositCurrentFiled = document.getElementById(
    "deposit-current-balance"
  );
  const depositCurrentBalance = parseFloat(depositCurrentFiled.innerText);
  const totalBalanceFiled = document.getElementById("total-balance");

  const depositInput = document.getElementById("deposit-input");
  const depositInputNumber = parseFloat(depositInput.value);

  //update deposit balance
  depositCurrentFiled.innerText = depositCurrentBalance + depositInputNumber;

  //update total balance
  const totalBalance = parseFloat(totalBalanceFiled.innerText);
  totalBalanceFiled.innerText = totalBalance + depositInputNumber;

  // input box clear
  depositInput.value = "";
});

// Withdraw function
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // call id
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawBalance = document.getElementById("withdraw-filed");
  const totalBalanceFiled = document.getElementById("total-balance");

  // Convert Number
  const withdrawBalanceNumber = parseFloat(withdrawBalance.innerText);
  const withdrawInputNumber = parseFloat(withdrawInput.value);
  const totalBalance = parseFloat(totalBalanceFiled.innerText);

  if (totalBalance < withdrawInputNumber) {
    alert("Please Deposit First");
    withdrawInput.value = "";
  } else {
    //Update withdraw balance
    withdrawBalance.innerText = withdrawBalanceNumber + withdrawInputNumber;

    //Update total balance

    totalBalanceFiled.innerText = totalBalance - withdrawInputNumber;

    //clear input box
    withdrawInput.value = "";
  }
});
