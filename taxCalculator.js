function calculateTax() {
    // Get the user input values
    let cost = document.getElementById('cost').value;
    let taxRate = document.getElementById('taxRate').value;

    // Basic validation
    if (cost === '' || taxRate === '' || isNaN(cost) || isNaN(taxRate) || cost < 0 || taxRate < 0) {
        alert('Please enter valid cost and tax rate values.');
        return;
    }

    // Convert inputs to numbers
    cost = parseFloat(cost);
    taxRate = parseFloat(taxRate);

    // Calculate the tax amount and total cost
    const taxAmount = cost * (taxRate / 100);
    const totalCost = cost + taxAmount;

    // Display the results
    document.getElementById('results').innerHTML = `
        <p>Tax Amount: $${taxAmount.toFixed(2)}</p>
        <p>Total Cost including Tax: $${totalCost.toFixed(2)}</p>
    `;
}
