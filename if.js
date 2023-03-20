const age = 85; // adult
//const age = 35; // adult
//const age = 15; // teenager

if (age > 13 && age < 30) {
    console.log(`2 teenager`);
} else if (age > 30 && age < 80) {
    console.log(`2 adult`);
} else if (age > 80) {
    console.log(`2 old`);
} else {
    console.log(`2 baby`);
}

if (age > 80) {
    console.log(`1 old`);
} else if (age > 30) {
    console.log(`1 adult`);
} else if (age > 13) {
    console.log(`1 teenager`);
} else {
    console.log(`1 baby`);
}

if (age > 80) {
    console.log(`3 old`);
} 
if (age > 30) {
    console.log(`3 adult`);
}
if (age >= 13) {
    console.log(`3 teenager`);
} 
if (age < 13) {
    console.log(`3 baby`);
}