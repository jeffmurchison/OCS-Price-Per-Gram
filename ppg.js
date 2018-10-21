var weight = document.getElementsByClassName("swatch__title");
var price = document.getElementsByClassName("swatch__price");
var calcs = [];

for (i = 0; i < weight.length; i++) {
  calcs.push(price.item(i).innerHTML.replace('$','') / weight.item(i).innerHTML.replace('g',''));
  if (weight.item(i).innerHTML == "1g"){
    price.item(i).innerHTML = price.item(i).innerHTML + "<br>" + " - ";
  }
  else {
    price.item(i).innerHTML = price.item(i).innerHTML + "<br> ($" + calcs[i].toFixed(2) + "/g)";
  }
}
