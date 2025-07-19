const returnResult = document.querySelector(".results");

function numberSorteio() {
  const min = Math.ceil(document.querySelector("#input1").value);
  const max = Math.floor(document.querySelector("#input2").value);

  if (min > max) {
    alert("O primeiro valor deve ser maior que o segundo valor inserido.");
    return;
  } else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    returnResult.innerHTML = result;
  }
}
