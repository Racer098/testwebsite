function wordcompare() {
    var typed = document.getElementById("word").value;
  
    if (typed === w1 ||  typed === w2) {
      alert("Correct word");
    } else {
      alert("Incorrect word");
    }
  }
  
  document.querySelector("button").addEventListener("click", wordcompare);
