//1. submit button টা কে আগে cll করতে হবে তার মধ্যে function লিখতে হবে। 
document.getElementById("depojit-btn").addEventListener('click', function () {

    //2.input যেটাতে লিখব তাকে cll করতে হবে। 
    const inputDepojit = document.getElementById('input-depojit');
    //৩. তার value add (input থাকলে value) করতে হবে। 
    const depojitText = inputDepojit.value;
    //৪. value টাকে parseFloat করতে হবে সংখ্যা পাওয়ার জন্য 
    const depojit = parseFloat(depojitText);
    //৫. উপরের part এ add করতে হলে, যেখানে input করব তাকে cll করতে হবে। 
    const dipojittotal = document.getElementById('depojit-money');
    //6. innerText করতে হবে ।
    const previousDepojit = dipojittotal.innerText;
    // ৭. আগের মান এর সাথে যোগ করতে চাইলে যোগ করতে হবে।
    const newDepojit = parseFloat(previousDepojit) + depojit;
    // ৮. আগের মান টা innerText হয়ে, মান add করবে। 
    dipojittotal.innerText = newDepojit;
    const balanceTotal = document.getElementById("total-money");
    const balanceTotalText = balanceTotal.innerText;
    const newTotalBalance = parseFloat(balanceTotalText) + newDepojit;
    balanceTotal.innerText = newTotalBalance;
    inputDepojit.value = "";
});
document.getElementById("withdrow-btn").addEventListener('click', function () {
    const inputWithdrow = document.getElementById("input-withdrow");
    const inputWithdrowText = inputWithdrow.value;
    const withdrowMoney = document.getElementById('withdrow-money');
    const withdrowMoneyText = withdrowMoney.innerText;
    const totalWithdrow = parseFloat(withdrowMoneyText) + parseFloat(inputWithdrowText);
    withdrowMoney.innerText = totalWithdrow;
    const balanceTaotalnew = document.getElementById('total-money');
    const balanceTaotalnewtext = balanceTaotalnew.innerText;
    const prasentBalance = parseFloat(balanceTaotalnewtext) - parseFloat(totalWithdrow);
    balanceTaotalnew.innerText= prasentBalance;
    inputWithdrow.value = "";

});
    //const balanceTaotalnew = document.getElementById('total-money');
    // const balanceTaotalnewtext = balanceTaotalnew.innerText;
    // 
    // 