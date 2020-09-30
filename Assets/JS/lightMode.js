// LIGHT MODE

let lightModebtn = document.getElementById('lightMode');
let svg = document.getElementsByClassName('svg')[0];
let favicon = document.querySelector("link[rel*='icon']");
let about = document.getElementById('about');
let model = document.getElementById('ex1');

lightModebtn.addEventListener('click', () => {
    if (document.body.classList.contains('normal')) {
        // Set innertext
        lightModebtn.innerText = "Dark Mode?";

        // Body class switch
        document.body.classList.remove('normal');
        document.body.classList.add('lightMode');

        // Changes SVG fill 
        svg.id = "navBtnLight";

        // Changes the tab favicon
        favicon.href = './Assets/favicons/faviconLight.ico';

        // Cookie for light mode
        document.cookie = "mode=Light";

        // About btn
        about.classList.remove('aboutDark')
        about.classList.add('aboutLight')

        // Model
        model.classList.remove('myModalLight');
        model.classList.add('myModalDark');
    } else {
      // Set innertext
      lightModebtn.innerText = "Light Mode?";

        // Body class switch
        document.body.classList.add('normal');
        document.body.classList.remove('lightMode');

        // Changes SVG fill 
        svg.id = "navBtn";

        // Changes the tab favicon
        favicon.href = './Assets/favicons/faviconDark.ico';

        // Cookie for light mode
        document.cookie = "mode=Dark";

        // About btn
        about.classList.add('aboutDark')
        about.classList.remove('aboutLight')

        // Model
        model.classList.add('myModalLight');
        model.classList.remove('myModalDark');
    }
})

// END LIGHT MODE

const setDark = () => {
    // Set innertext
    lightModebtn.innerText = "Light Mode?";

    // Body class switch
    document.body.classList.add('normal')
    document.body.classList.remove('lightMode')

    // Changes SVG fill 
    svg.id = "navBtn"

    // Changes the tab favicon
    favicon.href = './Assets/favicons/faviconDark.ico';

    // About btn
    about.classList.add('aboutDark')
    about.classList.remove('aboutLight')

    // Model
    model.classList.add('myModalLight');
    model.classList.remove('myModalDark');
}

const setLight = () => {
    // Set innertext
    lightModebtn.innerText = "Dark Mode?";
    
    // Body class switch
    document.body.classList.remove('normal')
    document.body.classList.add('lightMode')

    // Changes SVG fill 
    svg.id = "navBtnLight"

    // Changes the tab favicon
    favicon.href = './Assets/favicons/faviconLight.ico';

    // About btn
    about.classList.remove('aboutDark')
    about.classList.add('aboutLight')

    // Model
    model.classList.remove('myModalLight');
    model.classList.add('myModalDark');
}

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
let mode = getCookie('mode');
if (mode === "Dark") {
    setDark()
} else if (mode === "Light") {
    setLight()
}
