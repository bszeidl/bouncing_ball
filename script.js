function pageLoaded() {
    const rootDiv = document.getElementById('root');

    rootDiv.insertAdjacentHTML('afterbegin', '<img src="./soccer2.png" alt="soccer" class="soccer">')

    let left = Math.random();

    let soccer = document.querySelector('.soccer');

    soccer.style.left(`${left}%`);
};

window.addEventListener('load', pageLoaded);