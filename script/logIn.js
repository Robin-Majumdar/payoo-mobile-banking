// Log In Button Inter Action Function  Invalid phone number or PIN

const loginButton = document.getElementById('login-button');
const pinNumber = document.getElementById('pin-number');

if (pinNumber && loginButton) {
    pinNumber.addEventListener('input', function () {
        const pinValue = pinNumber.value.trim();

        if (pinValue.length === 4) {
            loginButton.disabled = false;
        }
        else {
            loginButton.disabled = true;
        }
    });
}

if (loginButton) {
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value.trim();
        const pinNumber = document.getElementById('pin-number').value.trim();

        if (phoneNumber === '01533119777' && pinNumber === '1234') {
            window.location.replace('./home.html')
        }
        else {
            alert('Invalid phone number or PIN');
        }

        console.log(phoneNumber, pinNumber);

    });
}