function bouge()
{
    let aiguilleSecondes = document.querySelector("#secondes");
    let aiguilleMinutes = document.querySelector("#minutes");
    let aiguilleHeures = document.querySelector("#heures");

    let maDate = new Date();
    let valeursec = maDate.getSeconds();
    let valeurmin = maDate.getMinutes();
    let valeurh = maDate.getHours();

    console.log(valeursec);
    console.log(valeurmin);
    console.log(valeurh);

    aiguilleSecondes.style.transform = "rotate(" + ((valeursec*6)-90) + "deg)";
    aiguilleMinutes.style.transform = "rotate(" + ((valeurmin*6)-90) + "deg)";
    aiguilleHeures.style.transform = "rotate(" + ((valeurh*30)-90) + "deg)";
}

window.setInterval(bouge, 1000);