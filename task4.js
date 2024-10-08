let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    const cubed = numbers[i] ** 3;
    sum += cubed;
    console.log(`Element: ${numbers[i]}, Cubed: ${cubed}, Current Sum: ${sum}`);
} 
console.log('Total Sum (for):', sum); 

// Через цикл for of
sum = 0;
for (let num of numbers) {
    const cubed = num ** 3;
    sum += cubed;
    console.log(`Element: ${num}, Cubed: ${cubed}, Current Sum: ${sum}`);
} 
console.log('Total Sum (for of):', sum);
