const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");


const arabicToRoman = (input) => {

  if (input >= 1000) {
    return "M" + arabicToRoman(input - 1000);
  } else if (input >= 900) {
    return "CM" + arabicToRoman(input - 900);
  } else if (input >= 500) {
    return "D" + arabicToRoman(input - 500);
  } else if (input >= 400) {
    return "CD" + arabicToRoman(input - 400);
  } else if (input >= 100) {
    return "C" + arabicToRoman(input - 100);
  } else if (input >= 90) {
    return "XC" + arabicToRoman(input - 90);
  } else if (input >= 50) {
    return "L" + arabicToRoman(input - 50);
  } else if (input >= 40) {
    return "XL" + arabicToRoman(input - 40);
  } else if (input >= 10) {
    return "X" + arabicToRoman(input - 10);
  } else if (input >= 9) {
    return "IX" + arabicToRoman(input - 9);
  } else if (input >= 5) {
    return "V" + arabicToRoman(input - 5);
  } else if (input >= 4) {
    return "IV" + arabicToRoman(input - 4);
  } else if (input >= 1) {
    return "I" + arabicToRoman(input - 1);
  } else if (input === 0) {
    return ""; // Base case: return empty string 
  }
};

const checkUserInput = () => {
  const inputInt = parseInt(number.value);

  if (isNaN(inputInt) || !inputInt) {
    output.innerHTML = "<p>Please enter a valid number.</p>";
    return;
  }

  if (inputInt <= 0) {
    output.innerHTML = "<p>Please enter a number greater than or equal to 1.</p>";
    return;
  }

  if (inputInt >= 4000) {
    output.innerHTML = "<p>Please enter a number less than or equal to 3999.</p>";
    return;
  }

  output.innerHTML = `<p>${arabicToRoman(inputInt)}</p>`
}

convertBtn.addEventListener("click", checkUserInput);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});


// Test cases
// console.log(arabicToRoman(9)) // "IX"
// console.log(arabicToRoman(16)) // "XVI"
// console.log(arabicToRoman(649)) // "DCXLIX"
// console.log(arabicToRoman(1023)) // "MXXIII"
// console.log(arabicToRoman(3999)) // "MMMCMXCIX"