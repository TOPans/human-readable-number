module.exports = function toReadable(number) {
    let ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numList = number.toString();

    //number 0-19
    if (number < 20) {
        return ones[number];
    }

    //number 20-99
    if (numList.length === 2) {
        if (numList[1] === "0") return tens[numList[0]];
        return tens[numList[0]] + " " + ones[numList[1]];
    }

    //number 100-999
    if (numList.length == 3) {
        if (numList[1] === "0" && numList[2] === "0")
            return ones[numList[0]] + " hundred";
        return (
            ones[numList[0]] +
            " hundred " +
            toReadable(+(numList[1] + numList[2]))
        );
    }
};
