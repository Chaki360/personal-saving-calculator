

const totalCost = document.getElementById("calculator").addEventListener('click', function () {

    const incomeInput = document.getElementById('income-input')
    const incomeValue = document.getElementById('income-input').value;
    const totalIncome = parseInt(incomeValue);
    incomeInput.value = ''



    const foodInput = document.getElementById('food-input');
    const foodValue = document.getElementById('food-input').value;
    const totalFoodCost = parseInt(foodValue);
    foodInput.value = ''

    const rentInput = document.getElementById('rent-input');
    const rentValue = document.getElementById('rent-input').value;
    const totalRentCost = parseInt(rentValue);
    rentInput.value = ''


    const ClothInput = document.getElementById('cloth-input');
    const ClothValue = document.getElementById('cloth-input').value;
    const totalClothCost = parseInt(ClothValue);
    ClothInput.value = ''


    const currentExpense = document.getElementById('expences');
    const currentExpenseAmount = currentExpense.innerText;
    const myCurrentExpense = parseFloat(currentExpenseAmount);

    const currentBalance = document.getElementById('balance');
    const currentBalanceAmount = currentBalance.innerText;
    const myCurrentBalance = parseFloat(currentBalanceAmount);


    const totalExpenses = (totalFoodCost + totalRentCost + totalClothCost + myCurrentExpense);
    currentExpense.innerText = totalExpenses;

    const newCurrentBalance = totalIncome - totalExpenses;
    currentBalance.innerText = newCurrentBalance;

    const totalCost = document.getElementById("saving-btn").addEventListener('click', function () {

        const savingInput = document.getElementById('saving-input');
        const savingValue = document.getElementById('saving-input').value;
        const savingAmount = totalIncome / 100;
        const allSaving = savingValue * savingAmount;

        console.log(savingAmount);


    })

})
