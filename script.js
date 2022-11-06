function convertNum() {
  document.getElementById("ordinalNum").innerHTML = ordinal(
    document.getElementById("number").value
  );
}
function ordinal(num) {
  const a = [
    "",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Nineth",
    "Tenth",
    "Eleventh",
    "Twelveth",
    "Thirteenth",
    "Fourteenth",
    "Fifteenth",
    "Sixteenth",
    "Seventeenth",
    "Eighteenth",
    "Nineteenth",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const numString = num.toString();

  if (num < 20) {
    return a[num];
  } else if (numString.length === 2) {
    return b[numString[0]] + " " + a[numString[1]];
  }
  return num;
}
