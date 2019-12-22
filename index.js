// lägg till namn och värde i inkomster tabellen
function addTableInkomster() {
  let getInputValue = document.getElementById("inkomst"),
    newRow = getInputValue.insertRow(getInputValue.length),
    cellText = newRow.insertCell(0),
    cellNumber = newRow.insertCell(1),
    getTextInput = document.getElementById("text-input").value,
    getValueInput = document.getElementById("value-input").value;
  cellText.innerHTML = getTextInput;
  cellNumber.innerHTML = getValueInput;
}
// lägg till namn och värde i utgifter tabellen
function addTableUtgifter() {
  let getInputValue = document.getElementById("utgift"),
    newRow = getInputValue.insertRow(getInputValue.length),
    cellText = newRow.insertCell(0),
    cellNumber = newRow.insertCell(1),
    getTextInput = document.getElementById("text-input").value,
    getValueInput = document.getElementById("value-input").value;
  cellText.innerHTML = getTextInput;
  cellNumber.innerHTML = getValueInput;
}

// bestämmer om det är en inkomst eller utgift
function valueSwitch() {
  let optionValue = document.getElementById("options").value;
  if (optionValue == "+") {
    addTableInkomster();
  } else {
    addTableUtgifter();
  }
}

// beräkning av inkomster, utgifter och resultatet
function calculate() {
  let getInkomst = document.getElementById("inkomst"),
    sumInkomst = 0;

  for (let i = 1; i < getInkomst.rows.length; i++) {
    sumInkomst = sumInkomst + parseInt(getInkomst.rows[i].cells[1].innerHTML);
  }
  document.getElementById("outputInkomster").innerHTML = sumInkomst;

  let getUtgift = document.getElementById("utgift"),
    sumUtgift = 0;

  for (let i = 1; i < getUtgift.rows.length; i++) {
    sumUtgift = sumUtgift + parseInt(getUtgift.rows[i].cells[1].innerHTML);
  }
  document.getElementById("outputUtgifter").innerHTML = sumUtgift;

  resultat = sumInkomst - sumUtgift;
  document.getElementById("outputResultat").innerHTML = resultat;
}

function clearall() {
  document.getElementById("outputInkomster").innerHTML = "Inkomster";
  document.getElementById("outputUtgifter").innerHTML = "Utgifter";
  document.getElementById("outputResultat").innerHTML = "Resultat";

  document.getElementById("options").value = "+";
  document.getElementById("text-input").value = "";
  document.getElementById("value-input").value = "";

  var rowCount = inkomst.rows.length;
  while (--rowCount) inkomst.deleteRow(rowCount);

  var rowCount = utgift.rows.length;
  while (--rowCount) utgift.deleteRow(rowCount);
}
