const makeChange = (c) => {
  // your name here
	let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    // Calculate the number of quarters
    quarters = Math.floor(c / 0.25);
    c -= quarters * 0.25;

    // Calculate the number of dimes
    dimes = Math.floor(c / 0.10);
    c -= dimes * 0.10;

    // Calculate the number of nickels
    nickels = Math.floor(c / 0.05);
    c -= nickels * 0.05;

    // Calculate the number of pennies
    pennies = Math.floor(c / 0.01);
    c -= pennies * 0.01;

    // Return the result as an object
    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
