
document.getElementById('add-money-button')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // Bank Name:[Text-this means Bank full name] or Bank Value:[dbbl, brac etc]
        const bank = document.getElementById('select-bank');

        const bankValue = bank.value;
        const bankName = bank.options[bank.selectedIndex].text;


        // Input Value
        const bankAccountNumber = document.getElementById('bank-account-number').value;
        const addMoney = getInputFiledValue('input-add-money');
        const pinNumber = getInputFiledValue('input-pin-number');

        // Text Value
        const accountBalance = getTextFiledValue('account-balance');


        // Here some condition statement 

        if (bankValue === "") {
            alert("Please select your bank");
            return;
        }

        if (bankAccountNumber.length !== 11 || isNaN(bankAccountNumber)) {
            alert("Enter a valid 11 digit account number");
            return;
        }

        if (isNaN(addMoney)) {
            alert('Please input your valid amount.')
            return;
        }

        if (pinNumber === 1234) {
            const newBalance = accountBalance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Add money failed please try again!')
        }
    });