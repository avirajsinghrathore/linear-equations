function program() {
   let a = document.getElementById("a").value;
   let b = document.getElementById("b").value;
   let c = document.getElementById("c").value;
   let abc = a+" x + "+b+" y + "+c;
    document.getElementById("abc").innerText = abc;

   let p = document.getElementById("p").value;
   let q = document.getElementById("q").value;
   let r = document.getElementById("r").value;
   let pqr = p+" x +"+q+" y + "+r;
    document.getElementById("pqr").innerText = pqr;

    let x = a / p;
    let y = b / q;
    let z = c / r;
   
    if (x == y == z) {
      document.getElementById("sys").innerText = "Consistent System of equations";
      document.getElementById("sol").innerText = "Infinitely Many Solutions";
      document.getElementById("graph").innerText = "Coinsiding Lines";
         }
   else if (x == y) {
      document.getElementById("sys").innerText = "InConsistent System of equations";
      document.getElementById("sol").innerText = "No Solutions";
      document.getElementById("graph").innerText = "Parallel Lines";
   }
   else {
      document.getElementById("sys").innerText = "Consistent System of equations";
      document.getElementById("sol").innerText = "No Solutions";
      document.getElementById("graph").innerText = "Intersecting Lines";
   }
    };