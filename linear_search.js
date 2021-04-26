const numbers = [12, 34, 45, 66, 134, 155, 167];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element == 34) {
        return i;
    }
}