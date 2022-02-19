module.exports = function toReadable (number) {
    const hundOne = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dec = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if (number < 20) {
            return `${hundOne[number%100]}`
    } else 
    if (number >= 20 && number < 100) {
        return number%10 === 0 ? `${dec[Math.floor(number/10)]}` : `${dec[Math.floor(number/10)]} ${hundOne[number%10]}`
    }
    if (number >= 100) {
        if (number % 100 === 0) {
            return `${hundOne[Math.floor(number/100)]} hundred`
        } else 
        if (number % 100 < 20) {
            return `${hundOne[Math.floor(number/100)]} hundred ${hundOne[number%100]}`
        } else {
            return number%10 === 0 ? `${hundOne[Math.floor(number/100)]} hundred ${dec[Math.floor((number%100)/10)]}` : `${hundOne[Math.floor(number/100)]} hundred ${dec[Math.floor((number%100)/10)]} ${hundOne[((number%100)%10)]}` 
        }
    }
}
