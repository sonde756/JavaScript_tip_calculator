function formatMoney(value) {
  value = Math.round(value * 100) / 100;
  return "$ " + value.toFixed(2);
}

function formatSplit(value) {
  if (value == 1) return value + " person";

  return value + " people"
}

function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = Number(document.getElementById("tipInput").value);
  let split = Number(document.getElementById("splitInput").value);
  let tipValue = bill * (tipPercent / 100);
  let billEach = (bill + tipValue) / split;

  if (bill < 0) {
    document.getElementById("yourBill").value = 0;
  }

  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("billEach").innerHTML = formatMoney(billEach);


}


/*   REFATORAÇÃO GPT
function update() {
  const bill = parseFloat(document.getElementById("yourBill").value);
  const tipPercent = parseFloat(document.getElementById("tipInput").value);
  const split = parseFloat(document.getElementById("splitInput").value);
  const tipValue = bill * (tipPercent / 100);
  const billEach = (bill + tipValue) / split;

  document.getElementById("tipPercent").textContent = tipPercent.toFixed(2) + "%";
  document.getElementById("splitValue").textContent = split.toFixed(0);
  document.getElementById("tipValue").textContent = "$" + tipValue.toFixed(2);
  document.getElementById("billEach").textContent = "$" + billEach.toFixed(2);
}*/
