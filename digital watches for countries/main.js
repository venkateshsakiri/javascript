// indian watch....
let indianWatch = () => {
    let options = { timeZone: 'Asia/Kolkata' };
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString();
    document.querySelector('#indian-date').innerText = `${currentDate}`;
    document.getElementById('indian-time').innerText = `${currentTime}`;
};
setInterval(indianWatch, 1000);


// indian watch....
let usaWatch = () => {
    let options = { timeZone: 'America/New_York' };
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString();
    document.querySelector('#usa-date').innerText = `${currentDate}`;
    document.getElementById('usa-time').innerText = `${currentTime}`;
};
setInterval(usaWatch, 1000);

// indian watch....
let chinaWatch = () => {
    let options = { timeZone: 'Asia/Shanghai' };
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString();
    document.querySelector('#china-date').innerText = `${currentDate}`;
    document.getElementById('china-time').innerText = `${currentTime}`;
};
setInterval(chinaWatch, 1000);