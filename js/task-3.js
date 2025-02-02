function checkForSpam(message) {

    const filter = message.toLowerCase();


    if (filter.includes('spam') || filter.includes('sale')) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Get best sale offers now!"));