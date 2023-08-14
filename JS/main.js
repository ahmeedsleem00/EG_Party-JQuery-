// $(".singer").click(function(){
    
//     let clickon = $(".singer").click
//         $(".lorem").slideToggle(1000)
// })
// $(".singer-2").click(function(){
    
   
//         $(".lorem-2").slideToggle(1000)
//     $(".lorem","lorem-3").slideToggle(1000)

// })
// $(".singer-3").click(function(){
    
//     let clickon = $(".singer-3").click
//     console.log(clickon);
//         $(".lorem-3").slideToggle(1000)
// })


$(".singer").click(function() {
    $(".lorem-2, .lorem-3, .lorem-4").slideUp(1000);
    $(".lorem").slideToggle(1000);
  });
  
  $(".singer-2").click(function() {
    $(".lorem, .lorem-3, .lorem-4").slideUp(1000);
    $(".lorem-2").slideToggle(1000);
  });
  
  $(".singer-3").click(function() {
    $(".lorem, .lorem-2, .lorem-4").slideUp(1000);
    $(".lorem-3").slideToggle(1000);
  });
  $(".singer-4").click(function() {
    $(".lorem, .lorem-2, .lorem-3").slideUp(1000);
    $(".lorem-4").slideToggle(1000);
  });

  var countDownDate = new Date("Aug 9, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `<div class="container-fluid d-flex text-white justify-content-between div-time">
  <div class="col-md-3  count">
<span>-${days}d</span>
  </div>

  <div class="col-md-3 count">
<span>${hours} h</span>
  </div>

  <div class="col-md-3 count">
<span>${minutes} m</span>
  </div>

  <div class="col-md-3 count">
<span>${seconds} s</span>
  </div>

</div>`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }}, 1000);


  // $(".sidebar").click(function(){
  //   let color = $(this).css("background-color")

  //   console.log(color);

  // })


  // $(".setting").click(function() 
  // {
  //   let widthRight = $(".sidebar").innerWidth()
  //   console.log(widthRight);
  //   $(".sidebar").animate({left: "50px"},1000)
  // })

  $(".setting").click(function() {
    // $(".sidebar").removeClass("d-none"); 
    
    let widthRight = $(".sidebar").outerWidth();
    console.log(widthRight);
    $(".sidebar").animate({ left: "0px" }, 1000); 
  });
  

  $(".fa-xmark").click(function() 
  {
    let width = $(".sidebar").outerWidth()
    console.log(width);
    $(".sidebar").animate({left: `-${width}px`},1000)
  })

  document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.getElementById("textArea");
    const charCount = document.getElementById("charCount");
  
    textArea.addEventListener("input", function() {
      const maxLength = parseInt(textArea.getAttribute("maxlength"), 10);
      const currentLength = textArea.value.length;
      const remainingChars = maxLength - currentLength;
  
      charCount.textContent = `${remainingChars} character${remainingChars !== 1 ? "s" : ""} remaining`;
    });
  });
  

  