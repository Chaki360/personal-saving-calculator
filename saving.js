

const totalCost = document.getElementById("calculator").addEventListener('click', function () {

    const incomeInput = document.getElementById('income-input').value;
    const totalIncome = parseInt(incomeInput);



    const foodInput = document.getElementById('food-input').value;
    const totalFoodCost = parseInt(foodInput);

    const rentInput = document.getElementById('rent-input').value;
    const totalRentCost = parseInt(rentInput);

    const ClothInput = document.getElementById('cloth-input').value;
    const totalClothCost = parseInt(ClothInput);

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





})
