let myName = prompt("Adınız Nedir?");
let myNameDOM = document.querySelector("#myName");

if (myName) {
  myNameDOM.innerHTML = `${myName} `;
  clockFunction();
} else {
  alert("Bir isim giriniz.");
  location.reload();
}

/* Another Method */
function clockFunction() {
  let clockDOM = document.getElementById("myClock");
  let date = new Date().toLocaleString("tr-TR");
  clockDOM.innerHTML = date;
}

setInterval(clockFunction, 1000);
