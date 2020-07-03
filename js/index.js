// Your code goes here

// function clickEventHandler(event) {
//     event.style.transform = `scale(2, 0.5)`;
// }

function clickEventHandler(event) {
    event.preventDefault();
}

document.querySelector(`a`).addEventListener(`click`, clickEventHandler);

homeLink.addEventListener(`click`, (event) => {
    homeLink.style.transform = `scale(2, 0.5)`;
    event.stopPropagation();

});

header.addEventListener(`click`, () => {
    console.log(`Someone clicked the header`);
});

mainImg.addEventListener(`mouseover`, () => {
    mainImg.src = `https://picsum.photos/800/240`;
});

const bodyTag = document.querySelector(`body`);
// console.log(bodyTag);
bodyTag.addEventListener(`keydown`, () => {
    const headline = document.createElement(`h1`);
    const newImg = document.createElement(`img`);
    newImg.src = `https://images.unsplash.com/photo-1503217114888-7b44283b2652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`;
    headline.textContent = `Uh oh...`;
    headline.style.textAlign = `center`;
    bodyTag.textContent = ` `;
    bodyTag.appendChild(newImg);
    bodyTag.appendChild(headline);
});

let pics = document.querySelectorAll(`img`);
window.addEventListener(`scroll`, () => {
    pics.forEach(item => {
        item.style.transform = `rotate(180deg)`;
    })
    
});

// const flipPics = setTimeout(resetPics, 5000);
// function resetPics() {
//     pics.forEach(item => {
//         item.style.transform = `rotate(180deg)`;
//     });
// };

bodyTag.addEventListener(`dblclick`, (target) => { 
    target.target.style.display = `none`;
});

bodyTag.addEventListener(`drag`, () => {
    gsap.to(`body`, {duration: 3, x: 100, y: 100, scale: 2, skewX: 45, rotation: 180}); // `skew(30deg, 20deg)`;
});
// gsap.to(".grey", {duration: 3, x: 100, y: 100, scale: 2, skewX: 45, rotation: 180});

bodyTag.addEventListener(`dragend`, () => {
    window.location.reload(true);
});

window.addEventListener(`load`, () =>  {
    pics.forEach(item => {
        item.style.border = `10px dashed green`;
    });
});

const remove = setTimeout(resetBorder, 5000);
function resetBorder() {
    pics.forEach(item => {
        item.style.border = ``;
    });
};

header.addEventListener(`mouseleave`, (event) => {
   header.style.display = `none`;
});

window.addEventListener(`resize`, () => {
    bodyTag.style.backgroundColor = `dodgerblue`;
});

function getScrollPosition() {
    // console.log(`The current scroll position is ${scrollY}`)
    return scrollY;
};

const scrollPos = () => {
    let scrollOne = setTimeout(getScrollPosition, 0);
    // console.log(`Scroll one = ${scrollOne}`);
    let scrollTwo = setTimeout(getScrollPosition, 35);
    let scrollTotal = scrollOne + scrollTwo;
    // console.log(`Scroll two = ${scrollTwo}`);
    // console.log(scrollTotal - scrollOne);
    // console.log(scrollTotal - scrollTwo);
    // console.log(scrollTotal)
    // scrollOne > scrollTwo ? console.log(`Scrolling down`) 
    // : console.log(`scrolling up`);
};

window.addEventListener(`scroll`, scrollPos);

gsap.to(`.nav-link`, {duration: 1, x: 100});

gsap.from(`img`, {duration: 1.5, x: 300, ease: "steps(12)", y: -500});