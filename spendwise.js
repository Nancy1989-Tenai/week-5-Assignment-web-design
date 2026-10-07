// ==========================================
// File: spendwise.js
// Project: SpendWise - JavaScript Foundation
// ==========================================

// 2. Store Application Data
// Variables representing key budgeting and expense information
let appName = "SpendWise";
let currency = "$";
let initialBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 5. Create Reusable Functions
// Function to calculate the remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Function to process and add a new expense
function processExpense(expenseAmount) {
    totalExpenses += expenseAmount;
    // Recalculate the remaining balance using the reusable function
    remainingBalance = calculateRemainingBalance(initialBudget, totalExpenses);
}

// Function to display the final results in the console
function displayBudgetSummary() {
    console.log(`--- ${appName} Budget Summary ---`);
    console.log(`Initial Budget:    ${currency}${initialBudget.toFixed(2)}`);
    console.log(`Total Expenses:    ${currency}${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Balance: ${currency}${remainingBalance.toFixed(2)}`);
    console.log("--------------------------------");
}

// 3. Collect User Input & 4. Perform Budget Calculations
function startSpendWise() {
    console.log(`Welcome to ${appName}! Please follow the prompts to set up your budget.`);

    // Collect initial budget via prompt
    let budgetInput = prompt("Enter your total monthly budget:");
    initialBudget = parseFloat(budgetInput);

    // Validate budget input
    if (isNaN(initialBudget) || initialBudget < 0) {
        console.log("Error: Invalid budget entered. Please reload and enter a valid positive number.");
        return; // Stops the script if the input is invalid
    }

    // Collect expense amount via prompt
    let expenseInput = prompt("Enter the amount for your first expense:");
    let expenseAmount = parseFloat(expenseInput);

    // Validate and process expense
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        processExpense(expenseAmount);
    } else {
        console.log("Note: Invalid expense amount entered. No expense was added.");
    }

    // 6. Display Results
    // Display calculated results in the browser console with clear labels
    displayBudgetSummary();
}

// Initialize the application when the script runs
startSpendWise();
