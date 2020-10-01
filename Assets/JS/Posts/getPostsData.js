// Get Posts Data from API

let main = document.getElementById('archiveMain');
let archiveStyle;
let archiveHrStyle;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

// Check cookie to set light or dark before load
let archiveMode = getCookie('mode');
if (archiveMode === "Dark") {
    archiveStyle = "archiveLiDark";
    archiveHrStyle = "archiveHrDark";
} else if (archiveMode === "Light") {
    archiveStyle = "archiveLiLight";
    archiveHrStyle = "archiveHrLight";
} else {
    document.cookie = "mode=Dark";
    archiveStyle = "archiveLiDark";
    archiveHrStyle = "archiveHrDark";
}


fetch('http://10.0.0.63:5000/all', {method: "Get"})
.then(res => res.json())
.then(res => display(res))

const display = (data) => {
    for (let i of Object.keys(data)) {
        let li = document.createElement('li');
        let hr = document.createElement('hr');

        li.innerHTML = `Title: ${i} <br/> Date: ${data[i]}`;
        li.classList.add(archiveStyle);
        hr.classList.add(archiveHrStyle);

        main.appendChild(li);
        main.appendChild(hr);
    }
}

// END