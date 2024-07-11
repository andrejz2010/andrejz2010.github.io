document.addEventListener('DOMContentLoaded', () => {
    // Toggle Interests Section
    const toggleInterestsButton = document.getElementById('toggle-interests');
    const interestsSection = document.getElementById('interests-section');
    
    toggleInterestsButton.addEventListener('click', () => {
        const p = interestsSection.querySelector('p');
        if (p.style.display === 'none') {
            p.style.display = 'block';
            toggleInterestsButton.textContent = 'Hide Interests';
        } else {
            p.style.display = 'none';
            toggleInterestsButton.textContent = 'Show Interests';
        }
    });

    // Simple Calculator
    const calculateButton = document.getElementById('calculate');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calcResult = document.getElementById('calc-result');

    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        if (isNaN(num1) || isNaN(num2)) {
            calcResult.textContent = 'Please enter valid numbers.';
        } else {
            calcResult.textContent = `Result: ${num1 + num2}`;
        }
    });

    // Greeting Based on Current Time
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingElement.textContent = 'Good Afternoon!';
    } else {
        greetingElement.textContent = 'Good Evening!';
    }
});
