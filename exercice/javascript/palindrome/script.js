function isValidDate(dateString) {
  const formatRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!formatRegex.test(dateString)) {
    return false;
  }

  const parts = dateString.split("/");
  const days = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Check year
  if (year < 1000 || year > 9999) {
    return false;
  }

  // Check month
  if (month < 1 || month > 12) {
    return false;
  }

  const date = new Date(year, month - 1, days);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== days
  ) {
    return false;
  }

  return true;
}

function isPalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }

  const digitsOnly = dateString.replace(/\//g, "");

  const reversed = digitsOnly.split("").reverse().join("");

  return digitsOnly === reversed;
}

console.log(isPalindrome("11/11/1111"));

function getNextPalindrom(count) {
  let arrayPalindrome = [];

  let currentDay = new Date();

  while (arrayPalindrome.length < count) {
    currentDay.setDate(currentDay.getDate() + 1);

    const day = String(currentDay.getDate()).padStart(2, "0");
    const month = String(currentDay.getMonth() + 1).padStart(2, "0");
    const year = currentDay.getFullYear();

    const currentDayString = `${day}/${month}/${year}`;

    if (isPalindrome(currentDayString)) {
      arrayPalindrome.push(currentDayString);
    }
  }
  return arrayPalindrome;
}

console.log(getNextPalindrom(3))
