let noBtn = document.getElementById('noBtn');
let yesBtn = document.getElementById('yesBtn');
let h1 = document.querySelector('h1');
let heart = document.querySelector('.heart');
let textDiv = document.querySelector('.text');

const noMessages = [
    'Are you sure? guin gonna be sad',
    'Wow, really?',
    'nono, just click yes and give me ur bongo.',
    'You can still say yes!',
    "don't be shy, click yes :D",
    'its okayy just do it! guin about to cry na',
    'do you really hate guin? guin criesss',
    'Are you sure you want to say no?',
    'Is this the way of you saying you dont love guin? :(',
    'I thought we had something special, but I guess not. :(',
    '...'
];
let noClickCount = 0;
let rotation = 0;

noBtn.addEventListener('click', function() {
    const btnRect = noBtn.getBoundingClientRect();
    const maxLeft = window.innerWidth - btnRect.width;
    const maxTop = window.innerHeight - btnRect.height;
    const left = Math.random() * Math.max(0, maxLeft);
    const top = Math.random() * Math.max(0, maxTop);
    noBtn.style.position = 'fixed';
    noBtn.style.left = left + 'px';
    noBtn.style.top = top + 'px';
    noBtn.style.transform = `scale(1) rotate(${rotation}deg)`;
    noBtn.style.transition = 'left 0.4s cubic-bezier(.68,-0.55,.27,1.55), top 0.4s cubic-bezier(.68,-0.55,.27,1.55), transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
    if (noClickCount === 0) {
        noBtn.classList.add('red');
    }
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        noBtn.textContent = noMessages[noMessages.length - 1];
    }
});

yesBtn.addEventListener('click', function() {
    yesBtn.classList.add('pulse');
    setTimeout(() => yesBtn.classList.remove('pulse'), 300);
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 300); 
});

window.addEventListener('DOMContentLoaded', () => {
    h1.classList.add('fade-in');
    heart.classList.add('beat');
    textDiv.classList.add('fade-in');

    textDiv.style.position = 'relative';
});