function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

 let romanNumeral = "";
    let remaining = num;
    while (remaining > 0) {
        // Find the highest symbol that is less than or equal to the remaining number
        const maxSymbol = Object.keys(symbols).reduce((a, b) => (b <= remaining ? b : a));
        romanNumeral += symbols[maxSymbol];
        remaining -= maxSymbol;
    }
    return romanNumeral;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
