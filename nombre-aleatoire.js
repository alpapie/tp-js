var chiffreEn=parseInt(prompt("Entre votre chiffre compris entre 0 et 10"));
var aDeviner= Math.round(Math.random()*10)
console.log(aDeviner)
 while (chiffreEn !==aDeviner) {
      if (chiffreEn >aDeviner) {
          alert("Vous ete en dessus")
      }else if (chiffreEn < aDeviner) {
        alert("Vous ete en dessous")
      }
      chiffreEn=parseInt(prompt("Entre votre chiffre compris entre 0 et 10"));
 }
 alert("bravo!!")