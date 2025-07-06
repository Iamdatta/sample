window.onload = function() {
  document.querySelectorAll('.button2').forEach(button => {
    button.onclick = () => {
      alert("Hurray! Item added to cart!");
      document.querySelector('.cartbtn').style.display = "inline-block";
    };
  });

  

  document.querySelectorAll('.button1').forEach(button => {
    button.onclick = () => {
      document.querySelector('h2').innerHTML = "We are working on it";
      document.querySelector('h2').style.color = 'red';
      document.querySelector('h2').style.fontSize = '40px';
    };
  });
};

document.getElementById("searchBar").addEventListener("keyup", function () {
  const searchText = this.value.toLowerCase(); // get input text
  const cards = document.querySelectorAll(".fordiv1"); // select all product cards

  cards.forEach((card) => {
    const name = card.getAttribute("data-name"); // get the product name from data-name
    if (name.includes(searchText)) {
      card.style.display = "block"; // show matching
    } else {
      card.style.display = "none"; // hide non-matching
    }
  });
});


//document.getElementById("searchBar").addEventListener("focus", function () {
 // this.style.backgroundColor = "lightblue"; // change background color on focus
//});




