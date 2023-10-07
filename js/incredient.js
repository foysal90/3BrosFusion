document.getElementById("eye").addEventListener("mouseover", mouseOver);
document.getElementById("eye").addEventListener("mouseout", mouseOut);


function mouseOver() {
  document.getElementById("eye").innerText = `Incredients: 
  Shawarma
  Rice
  salad
  sauce
  cabbage `;
  document.getElementById("eye").style.backgroundColor= "black";
  document.getElementById("eye").style.color= "rgb(250, 179, 0)";
  document.getElementById("eye").style.width= "325px";
  document.getElementById("eye").style.height= "100%"
  document.getElementById("eye").style.borderRadius= "2px"
}

function mouseOut() {
  document.getElementById("eye").style.backgroundColor= "white";
  document.getElementById("eye").style.width= "100px";
}
