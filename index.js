function program() {
   let a = document.getElementById("a").value;
   let b = document.getElementById("b").value;
   let c = document.getElementById("c").value;
   let abc = a+"x+"+b+"y+"+c;
    document.getElementById("abc").innerText = abc;

   let p = document.getElementById("p").value;
   let q = document.getElementById("q").value;
   let r = document.getElementById("r").value;
   let pqr = p+"x+"+q+"y+"+r;
    document.getElementById("pqr").innerText = pqr;

    let x = a / p;
    let y = b / q;
    let z = c / r;
   
    if (x == y == z) {
      document.getElementById("answer").innerText = "They are Consistent System of equations. They have Infinitely Many Solutions.";
      document.getElementById("img").src = "/coincident.JPG";
         }
   else if (x == y) {
      document.getElementById("answer").innerText = "They are Inconsistent System of equations. They have No Solution.";
      document.getElementById("img").src = "/parallel.JPG";
   }
   else {
      document.getElementById("answer").innerText = "They are Consistent System of equations. They have a Unique Solution.";
      document.getElementById("img").src = "/intersecting.JPG";
   }
    };