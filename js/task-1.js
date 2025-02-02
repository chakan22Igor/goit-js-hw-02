function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (customerCredits >= totalPrice) {
    return `You ordered ${quatity} droids worth ${totalPrice} credits!`;
  } else if (customerCredits <= totalPrice) {
    return "Insufficient funds!";
  }
}

console.log(makeTransaction(8, 2000, 10000))