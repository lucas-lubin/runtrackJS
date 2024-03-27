let ma_citation = document.getElementById("citation");
let button = document.getElementById("button");

function citation() {
    //addEventListener pour definir le type d'event
    button.addEventListener("click", function() {
        console.log(ma_citation.textContent);
    })
}

citation();