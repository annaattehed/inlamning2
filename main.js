document.
    querySelector("button")
    .addEventListener("click", countIt)

// Deklaration av två tomma listor 

const kostnadsLista = [];
const inkomstLista = [];


function countIt(e) {
    e.preventDefault();

    // deklarerar två variablar som alltid har grundvärde 0

    let kostnadSumma = 0;
    let inkomstSumma = 0;

    const select = document.querySelector("select");

    const description = document.querySelector(".beskrivning").value;

    const number = document.querySelector(".nummer").value;

    //Alert ifall inget värde är valt vid "summit"

    if (select.value == "choose") {
        alert("Choose or you lose!");
    }

    // Väljer användaren plus så fylls de negativa värdet i kostnadslista 

    else if (select.value == "+") {

        document
            .querySelector(".inkomst_container")
            .innerHTML += `<li class="inkomst-lista"> ${description} : ${number} SEK  </li>`

        inkomstLista.push(number)
        console.log(inkomstLista)
    }
    // Väljer användaren minus så fylls de värdet i kostnadslista 

    else if (select.value == "-") {
        document
            .querySelector(".kostnad_container")
            .innerHTML += `<li class="kostnad-lista"> ${description} : ${number} SEK </li> `

        // pushar in värde i lista 

        kostnadsLista.push(number)
    }


    // Motverkar decimaltal 

    inkomstLista.map((e) => {

        inkomstSumma += parseFloat(e)

    })

    kostnadsLista.map((e) => {

        kostnadSumma += parseFloat(e)
    })

    // Val av div i html som sedan uträkningen av summan visas i 

    const vinstSum = document.querySelector(".vinst")


    const totalt = inkomstSumma - kostnadSumma

    // olika emoji-utfall beroende på om summan är positiv, negativ eller 0 

    if ((inkomstSumma - kostnadSumma) == 0) {
        vinstSum.innerHTML = totalt + " SEK </span>  " + "<span style='font-size:50px;'>&#128566;</span>";
    }

    else if ((inkomstSumma - kostnadSumma) < 1) {
        vinstSum.innerHTML = totalt + " SEK </span> " + "<span style='font-size:50px;'>&#129327;</span>";
    }

    else if ((inkomstSumma - kostnadSumma) > 1) {
        vinstSum.innerHTML = totalt + " SEK </span>  " + "<span style='font-size:50px;'>&#129297;</span>";
    }


}

