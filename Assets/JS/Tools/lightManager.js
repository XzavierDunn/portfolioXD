let favicon = document.querySelector("link[rel*='icon']");
let mainText = document.getElementById('mainText');

const setDark = () => {
    // Body class switch
    document.body.classList.add('normal')
    document.body.classList.remove('lightMode')

    // Changes the tab favicon
    favicon.href = '../favicons/faviconDark.ico';

    // Main Text
    mainText.classList.remove("mainTextLight");
    mainText.classList.add("mainTextDark");
}

const setLight = () => {
    // Body class switch
    document.body.classList.remove('normal')
    document.body.classList.add('lightMode')

    // Changes the tab favicon
    favicon.href = '../favicons/faviconLight.ico';

   // Main Text
   mainText.classList.add("mainTextLight");
   mainText.classList.remove("mainTextDark");
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
  setDark();
} else if (mode === "Light") {
    setLight();
} else {
  document.cookie = "mode=Dark";
  setDark();
}
