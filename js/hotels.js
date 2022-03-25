$(document).ready(function () {
  $(".book").click(function () {
    $(".top").hide();
    $(".hotels-resorts").hide();
    // $(".confirmation").hide()
    $("#form").show();
  });

  $("#bookBtn").click(function () {
    $("#form").hide();
    $(".confirmation").show();
  });
});

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("emailo");
  let duration = document.getElementById("duration");
  let geust = document.getElementById("guestNo");

  let formData = new FormData(e.target);
  let userName = formData.get("name");
//   alert(userName)
  let userEmail = formData.get("email");

  let checkIn = new Date(formData.get("in"));
  // alert(checkIn);
  let exactday =checkIn.getDate()
  let month = checkIn.getMonth()
  let year = checkIn.getFullYear()
  let checkOut = new Date(formData.get("out"));
  let exactday1 =checkOut.getDate()
  let month1 = checkOut.getMonth()
  let year1 = checkOut.getFullYear()

  let noGuest = formData.get("guest");
  // let jina = name.value
  name.innerHTML = `NAME: ${userName}`;
  email.innerHTML =`EMAIL: ${userEmail}`;
  duration.innerHTML =`DURATION: ${exactday}/${month}/${year} - ${exactday1}/${month1}/${year1}`;
noGuest.innerHTML = `NUMBER OF ${geust}`
  
alert( `Thank you ${userName} for choosing us! Hotel succesfully booked!`)
});
