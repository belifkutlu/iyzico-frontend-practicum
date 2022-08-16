let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let Name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

if (Name) {
  myName.innerHTML = `${Name} `;
} else {
  alert("Bir isim giriniz.");
  location.reload();
}

function clockFunction() {
  let dateTime = new Date();
  let day = days[dateTime.getDay()];
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  document.querySelector(
    "#myClock"
  ).innerHTML = `${hrs}: ${min}: ${sec}  ${day}`;
}

setInterval(clockFunction, 1000);

/* Another Method */
// function clockFunction() {
//   let date = new Date().toLocaleString("tr-TR");
//   document.getElementById("myClock").innerHTML = date;
// }
// setInterval(clockFunction, 1000);
