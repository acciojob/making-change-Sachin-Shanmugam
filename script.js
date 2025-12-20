function makeChange(amount) {
  const change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // Quarters (25)
  change.q = Math.floor(amount / 25);
  amount %= 25;

  // Dimes (10)
  change.d = Math.floor(amount / 10);
  amount %= 10;

  // Nickels (5)
  change.n = Math.floor(amount / 5);
  amount %= 5;

  // Pennies (1)
  change.p = amount;

  return change;
}
