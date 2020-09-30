let type1 = document.getElementById('type1');
let type2 = document.getElementById('type2');
let text1 = "Hey, what's up?"
let text2 = "I'm Xzavier."
let count1 = 0;
let count2 = 0;

const type = () => {
    if (count1 < text1.length) {
        type1.innerHTML += text1.charAt(count1);
        count1++;
        setTimeout(type, 50)
    } else if (count2 < text2.length) {
        type2.innerHTML += text2.charAt(count2);
        count2++;
        setTimeout(type, 50)
    }
}

if (type1.innerHTML != text1) {
    type();
}
