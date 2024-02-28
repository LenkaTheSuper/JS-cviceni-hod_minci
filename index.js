const padlOrel = Math.random() < 0.5
const vysledek = document.querySelector(".vysledek")
const mince = document.querySelector(".mince")

if (padlOrel) {
    vysledek.textContent = "Padl Orel !!"
    mince.classList = "mince--orel"
  } else {
    vysledek.textContent = "Padla Panna !!"
    mince.classList = "mince--panna"
  }