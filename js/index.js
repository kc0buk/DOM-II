// Your code goes here

function clickEventHandler(event) {
    console.log(event.type + `!!!!!!!`);
    console.log(event.target);
}

homeLink.addEventListener(`click`, clickEventHandler);

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

window.addEventListener(`scroll`, () => {
    let pics = document.querySelectorAll(`img`);
    pics.forEach(item => {
        item.style.transform = `rotate(180deg)`;
    })
    
});

bodyTag.addEventListener(`dblclick`, (target) => { 
    target.target.style.display = `none`;
});

bodyTag.addEventListener(`drag`, () => {
    bodyTag.style.transform = `skew(30deg, 20deg)`;
});

bodyTag.addEventListener(`dragend`, () => {
    window.location.reload(true);
});