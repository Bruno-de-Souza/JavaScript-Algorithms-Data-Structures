function checkSign(num) {
    return (num >= 1) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}
console.log(checkSign(10));