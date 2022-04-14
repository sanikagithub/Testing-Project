
function reverseNum (num) {
    let reverse = (parseInt(String(num)
    .split("")
    .reverse()
    .join("")));
    return reverse
}
module.exports = reverseNum;