// Retrieve specifc post

let archiveMain = document.getElementById('archiveMain');
let archiveBack = document.getElementById('archiveBack');
let post = document.getElementById('post');
let archiveTitle = document.getElementById('title');

archiveMain.addEventListener('click', (e) => {
    let data = e.target.innerHTML;
    x = data.split(' ');
    console.log(x)
    let id = x[1];
    id = id.replace('%3Cbr%3E', '');

    let url = [];
    let title = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] != "Title:" & x[i] != "Date:" & x[i] != "<br>") {
            url.push(x[i])
            title += " " + x[i];
        } else if (x[i] === "Date:") {
            i += x.length
        }
    }

    url = url.join('')
    console.log(url)
    fetch(`../posts/${url}`, {method: "Get"})
    .then(res => res.text())
    .then(res => {
        archiveMain.style.display = "none";
        archiveBack.href = "./archive.html"

        archiveTitle.innerHTML = title;
        archiveTitle.style.fontSize = "30px";
        archiveTitle.classList.add('titleMarginBottom');

        post.style.border = ".5px solid white";
        post.insertAdjacentHTML('beforeend', res);
    })
})

// End