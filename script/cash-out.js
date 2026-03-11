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

            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();

            const transactionHistory = document.getElementById('history');
            const newTransaction = document.createElement('div');

            newTransaction.innerHTML = `
                    <div class="bg-gray-200 flex items-center p-4 gap-4 rounded-xl">

                    <div class="bg-[#F4F5F7] p-2 rounded-full">
                        <img src="./assets/icon/cash-out.png" alt="Cash out icon">
                    </div>
                    <div>
                        <p class=''> ${cashOutMoney} Tk cash out successfully, from ${agentNumber}. Total balance: ${newBalance} Tk.</p>
                        <p class='text-sm'> On ${date} at ${time}</p>
                    </div>
                </div>`;

            transactionHistory.append(newTransaction);
        }
        else {
            alert('Cash out failed. Please try again!');
        }
    });
