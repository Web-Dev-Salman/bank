// Login javascript


document.getElementById('submit').addEventListener('click', function(){
    const emailFeild = document.getElementById('email-address');
    const email = emailFeild.value;

    const userPasswod = document.getElementById('password');
    const password = userPasswod.value;

    if (email === 'test@gmail.com' && password === 'test') {
        window.location.href = 'bank.html'; 
    } else {
        alert('invalid user');
    }
})
