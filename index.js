const questionPlace = document.getElementById("question");
var counter = 0;

function reset() {
  data();
}

function data() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "Base.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      datos = JSON.parse(this.responseText);
      console.table(datos[0].category);
      questionSelect(datos);
    }
  };
}

function questionSelect(datos) {
  questionPlace.innerText = datos[counter].category;
  datos.splice(counter, 1);
  counter++;
  if (counter > datos.length) {
    counter = 0;
  return counter;
  }
  return counter;
}
console.log(counter);
data();
