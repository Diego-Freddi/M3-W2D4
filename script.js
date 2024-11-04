
document.addEventListener("DOMContentLoaded", function () {

    // Seleziono il bottone di invio
    let inviaMess = document.getElementById('inviaMessaggio')

    // Aggiungo un Listener che al click del bottone invia, ripulisce i campi
    inviaMess.addEventListener("click", () => {
        document.getElementById("nome").value = '';
        document.getElementById("cognome").value = '';
        document.getElementById("indirizzo").value = '';
        document.getElementById("message-text").value = '';
    })

    // Seleziono tutti i link di navigazione
    let navLinks = document.querySelectorAll(".offcanvas-body .nav-link");
    let offcanvasElement = document.getElementById("offcanvasNavbar");

    // Aggiungo un listener click a ciascun link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // alla pressione di ogni link, vado a destinzaione e chiudo il menu
            let menu = bootstrap.Offcanvas.getInstance(offcanvasElement);
            menu.hide();
        });
    });


    // // Seleziono tutti gli elementi con classe .trip
    // let trip = document.querySelectorAll('.trip')

    // // Seleziono il bottone per il listener di chiusura
    // let chiudiCard = document.getElementById('chiudiCard')

    // chiudiCard.addEventListener('click', () => {
    //     trip.forEach(function(element) {
    //         element.style.display = 'none'
    //     })
    // })


    // Seleziono tutte la classi .contatore
    let contatore = document.querySelectorAll('.contatore')

    // Seleziono lo spazio riservato dove inserire il numero di viaggi pressente
    let conteggio = document.getElementById('quantiViaggi')

    // Seleziono il bottone a cui assegnare il Listener di conteggio
    let contaViaggi = document.getElementById('contaViaggi')
    
    // Aggiungo il Listener click per azzerare il contatore ad ogni avvio della funzion, contare quante classi contatore esistono, inserirle nello spazio riservato
    contaViaggi.addEventListener('click', () => {
        let count = 0

        for (let i = 0; i < contatore.length; i++) {
            count++
        }
        conteggio.textContent = count
    })


      



})


