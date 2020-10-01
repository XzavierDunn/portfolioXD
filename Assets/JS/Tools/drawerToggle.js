// DRAWER TOGGLE 

let drawer = document.getElementsByClassName('drawerP');
let btn = document.getElementById('navBtn');

btn.addEventListener('click', () => {
    if (drawer[0].classList.contains('open')) {
        for (let i of drawer) {
            i.classList.remove('open');
            i.classList.add('hide');
        }
    } else {
        for (let i of drawer) {
            i.classList.add('open');
            i.classList.remove('hide');
        }
    }
})

// END DRAWER SECTION
