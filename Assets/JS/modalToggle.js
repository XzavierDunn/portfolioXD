// Modal Toggle

let modal = document.getElementById("myModal");
let aboutBtn = document.getElementById('about');
let span = document.getElementsByClassName("close")[0];

aboutBtn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// End Modal