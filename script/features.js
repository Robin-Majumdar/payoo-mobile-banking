const buttons = document.querySelectorAll('.nav-btn');

function setActiveButton(activeBtn) {
    buttons.forEach(btn => {
        btn.classList.remove(
            'bg-purple-600', 'text-white', 'border-purple-600', 'hover:bg-purple-700'
        );
    });

    activeBtn.classList.add(
        'bg-purple-600', 'text-white', 'border-purple-600', 'hover:bg-purple-700'
    );
}

document.getElementById('show-add-money-section')
    .addEventListener('click', function () {
        setActiveButton(this);
        showSection('add-money-from');
    });

document.getElementById('show-cash-out-section')
    .addEventListener('click', function () {
        setActiveButton(this);
        showSection('cash-out-from');
    });

document.getElementById('show-transaction-history')
    .addEventListener('click', function () {
        setActiveButton(this);
        showSection('transaction-history');
    })