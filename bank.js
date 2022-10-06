
document.getElementById('deposit-submit').addEventListener('click',function(){
    const depositAmmout = document.getElementById('deposit');
    const depositnew = depositAmmout.value;
    const deposit = parseFloat(depositnew);

    const depositTaka = document.getElementById('deposit-taka');
    const depositTakaAmountnew = depositTaka.innerText;
    const depositTakaAmount = parseFloat(depositTakaAmountnew)

     
    const totalDeposit = depositTakaAmount + deposit;

    depositTaka.innerText = totalDeposit;
    
    const balanceTaka = document.getElementById('balance-taka');
    const balanceTakaTotalString = balanceTaka.innerText;
    const balanceTakaTotal = parseFloat( balanceTakaTotalString);
    const balance = balanceTakaTotal + deposit;
    balanceTaka.innerText = balance;
});

document.getElementById('withdrow-submit').addEventListener('click',function(){
    const withdrow = document.getElementById('withdrow');
    const withdrowTakaString = withdrow.value;
    const withdrowTaka = parseFloat(withdrowTakaString)

    const withdrowAmmount = document.getElementById('withdrow-taka');
    const withdrowAmmountTotalString = withdrowAmmount.innerText;
    const withdrowAmmountTotal = parseFloat(withdrowAmmountTotalString);
    
    const totalwithdrrow = withdrowAmmountTotal + withdrowTaka;

    withdrowAmmount.innerText = totalwithdrrow;
    
    const balanceTaka = document.getElementById('balance-taka');
    const balanceTakaTotalString = balanceTaka.innerText;
    const balanceTakaTotal = parseFloat( balanceTakaTotalString);
    const balance = balanceTakaTotal - withdrowTaka;
    balanceTaka.innerText = balance;
    

});
