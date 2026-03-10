document.getElementById('agent-number')
    .addEventListener('input', function () {

        this.value = this.value.replace(/\D/g, '');

        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
        }
    })

document.getElementById('cash-out-button')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // Input Value
        const agentNumber = document.getElementById('agent-number').value;
        const cashOutMoney = getInputFiledValue('input-cash-out');
        const cashOutPin = getInputFiledValue('input-cash-out-pin');

        // Text Value: Account Balance
        const accountBalance = getTextFiledValue('account-balance');

        if (agentNumber.length !== 11) {
            alert('Enter a valid 11 digit account number.');
            return;
        }

        if (isNaN(cashOutMoney) || cashOutMoney <= 0) {
            alert('Please enter a valid cash out amount');
            return;
        }

        if (cashOutMoney > accountBalance) {
            alert('Insufficient Balance');
            return;
        }

        if (cashOutPin === 1234) {
            const newBalance = accountBalance - cashOutMoney;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Cash out failed. Please try again!');
        }
    });
