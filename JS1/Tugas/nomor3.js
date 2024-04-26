const printSegitiga = "enam";

if (typeof printSegitiga === "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
} else {
  console.log("Data harus number");
}
