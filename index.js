const mobileMainBar = document.getElementById("mobile-main-bar");
const sideBar = document.getElementById("sidebar");
let numberOfDonuts = 0;
let numberOfAutoClickers = 0;
let autoClickerCost = 100;

document.getElementById("menu-icon").onclick = function () {
    sideBar.style.display = 'flex';
}

document.getElementById("sidebar-close").onclick = function () {
    sideBar.style.display = 'none';
    mobileMainBar.style.display = 'flex';
}

document.getElementById("cookie-clicker-main-link").onclick = function () {
    const cookieClickerSection = document.getElementById("cookie-clicker");
    cookieClickerSection.style.display = 'flex';
}

document.getElementById("cookie-clicker-close").onclick = function () {
    const cookieClickerSection = document.getElementById("cookie-clicker");
    cookieClickerSection.style.display = 'none';
}

document.getElementById("donut-maker-button").onclick = function () {
    numberOfDonuts = parseInt(numberOfDonuts) + 1;
    document.getElementById("number-of-donuts").innerText = numberOfDonuts;
}

document.getElementById("reset").onclick = function () {
    numberOfDonuts = 0;
    numberOfAutoClickers = 0;
    document.getElementById("number-of-donuts").innerText = numberOfDonuts;
    document.getElementById("number-of-auto-clickers").innerText = numberOfAutoClickers;
}

document.getElementById("buy-auto-clicker").onclick = function () {
    numberOfDonuts -= parseInt(autoClickerCost);
    numberOfAutoClickers += 1;

    document.getElementById("number-of-auto-clickers").innerText = numberOfAutoClickers;
    document.getElementById("number-of-donuts").innerText = numberOfDonuts;

    if (numberOfDonuts < autoClickerCost) {
        document.getElementById("buy-auto-clicker").style.display = 'none';
        document.getElementById("disabled-buy-auto-clicker").style.display = 'flex';
    }

    let autoClickerCostIncrease = autoClickerCost * 0.1;
    autoClickerCost += parseInt(autoClickerCostIncrease);
}

setInterval(function () {
    if (numberOfAutoClickers > 0) {
        numberOfDonuts += numberOfAutoClickers * 1;
        document.getElementById("number-of-donuts").innerText = parseInt(numberOfDonuts);
    }
    
}, 1000)

setInterval(function () {
    if (numberOfDonuts >= autoClickerCost) {
        document.getElementById("disabled-buy-auto-clicker").style.display = 'none';
        document.getElementById("buy-auto-clicker").style.display = 'flex';
    }

    document.getElementById("auto-clicker-cost").innerText = parseInt(autoClickerCost) + " donuts";
}, 1)
