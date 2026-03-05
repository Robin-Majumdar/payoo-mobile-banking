// Log In Button Inter Action Function  Invalid phone number or PIN

const loginButton = document.getElementById('login-button');
const pinNumber = document.getElementById('pin-number');
const logoutButton = document.getElementById('logout-button');

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

if (logoutButton) {
    logoutButton.addEventListener('click', function () {

        const confirmLogout = confirm('Are you sure want to log out?');

        if (confirmLogout) {
            window.location.replace('./index.html')
        }
    });
}