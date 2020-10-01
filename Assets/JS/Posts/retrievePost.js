// Retrieve specifc post

let archiveMain = document.getElementById('archiveMain');
let archiveBack = document.getElementById('archiveBack');
let post = document.getElementById('post');
let archiveTitle = document.getElementById('title');

archiveMain.addEventListener('click', (e) => {
    let data = e.target.innerHTML;
    x = data.split(' ');
    id = x[1]

    let url = [];
    let title = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] != "Title:" & x[i] != "Date:") {
            url.push(x[i])
            title += " " + x[i];
        } else if (x[i] === "Date:") {
            i += x.length
        }
    }

    url = url.join(' ')
    console.log(title)

    fetch(`../posts/${url}`, {method: "Get"})
    .then(res => res.text())
    .then(res => {
        archiveMain.style.display = "none";
        archiveBack.href = "./archive.html"

        archiveTitle.innerHTML = title;
        archiveTitle.style.fontSize = "30px";

        let p = document.createElement('p');
        p.classList.add('archiveP');
        for (let i of res) {
            if (i != "\n") {
                p.innerHTML += i;
            } else {
                post.appendChild(p);
                p = document.createElement('p');
                p.classList.add('archiveP');
    }
        }
    })
})

// End