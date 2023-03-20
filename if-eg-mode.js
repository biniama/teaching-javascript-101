let mode = 'dark1';
//let mode = 'light';
//let mode = '';
//let mode = 'DARK';
//let mode = 'LIGHT';
//let mode = 123;
let backgroundColor;
let textColor;

// First Example
if (mode === 'dark') {
    backgroundColor = 'black';
    textColor = 'white';
    console.log(`Current mode: ${mode}`);
    console.log(`Background color: ${backgroundColor}`);
    console.log(`Text color: ${textColor}`);
} else if (mode === 'light') {
    backgroundColor = 'white';
    textColor = 'black';
    console.log(`Current mode: ${mode}`);
    console.log(`Background color: ${backgroundColor}`);
    console.log(`Text color: ${textColor}`);
} else {
    console.log('The mode is not valid');
}

// To avoid repeating the `Console.log`, you can do this.
if (mode !== 'dark' && mode !== 'light') {
    console.log('The mode is not valid');
} else {
    if (mode === 'dark') {
        backgroundColor = 'black';
        textColor = 'white';
    } else if (mode === 'light') {
        backgroundColor = 'white';
        textColor = 'black';
    }
    console.log(`Current mode: ${mode}`);
    console.log(`Background color: ${backgroundColor}`);
    console.log(`Text color: ${textColor}`);
}