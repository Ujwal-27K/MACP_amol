function calculateMACP() {
    // Fetch input values
    const income = parseFloat(document.getElementById('income').value) || 0;
    const age = parseInt(document.getElementById('age').value) || 0;
    const family = parseInt(document.getElementById('family').value) || 0;
    const percentage = parseFloat(document.getElementById('percentage').value) || 0;
    const additional = parseFloat(document.getElementById('additional').value) || 0;
    
    // AgeFactor 
    let ageFactor = 18;
    if(age > 65)    {ageFactor = 5;}
    else if(age > 60) {ageFactor = 7;}
    else if(age > 55) {ageFactor = 9;}
    else if(age > 50) {ageFactor = 11;}
    else if(age > 45) {ageFactor = 13;}
    else if(age > 40) {ageFactor = 14;}
    else if(age > 35) {ageFactor = 15;}
    else if(age > 30) {ageFactor = 16;}
    else if(age > 25) {ageFactor = 17;}
    else {ageFactor = 18;}

    //Dependencies
    let numerator = 1;
    let denominator = 1;
    if(family > 6) {numerator = 5; denominator = 4}
    else if(family > 3) {numerator = 4; denominator = 3}
    else if(family > 1) {numerator = 3; denominator = 2}
    else {numerator = 1;denominator = 2}

    //calculation using income, age and dependencies only
    const first = income * 12 * ageFactor * denominator / numerator ; 

    // Placeholder calculation logic (to be updated based on your conditions)
    const percentageIncrease = (first * percentage) / 100;
    // MACP calculation
    const macp = first + percentageIncrease + additional;

    // Display result
    document.getElementById('result').textContent = `Calculated Amount : ₹${macp.toFixed(2)}`;
}
