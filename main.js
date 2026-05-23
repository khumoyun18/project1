const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

const amountInput = document.querySelector("#amount");
const directionSelect = document.querySelector("#direction");
const resultText = document.querySelector("#result");


const rates = {

    usd: 12070,

    eur: 14100,

    gbp: 16630,

    rub: 170,

    kzt: 27,

    chf: 15620,

    cny: 1800,

    jpy: 80

};


searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('show');
    if (searchInput.classList.contains('show')) {
        searchInput.focus(); 
    }
});


function toggleMenu() {

    document.querySelector("#nav_links").classList.toggle("show");

}



let darkBtn = document.querySelector("#dark_btn");

let icon = darkBtn.querySelector("i");



darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");



    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});





function convert() {

    const amount = Number(amountInput.value);

    const direction = directionSelect.value;



    if (!amount || amount <= 0) {

        resultText.textContent = "0";

        return;

    }



    let res = 0;




    switch (direction) {

        case "usdToUzs": res = amount * rates.usd; resultText.textContent = res.toLocaleString() + " so'm"; break;

        case "uzsToUsd": res = amount / rates.usd; resultText.textContent = "$" + res.toFixed(2); break;



        case "eurToUzs": res = amount * rates.eur; resultText.textContent = res.toLocaleString() + " so'm"; break;

        case "uzsToEur": res = amount / rates.eur; resultText.textContent = "€" + res.toFixed(2); break;



        case "gbpToUzs": res = amount * rates.gbp; resultText.textContent = res.toLocaleString() + " so'm"; break;

        case "uzsToGbp": res = amount / rates.gbp; resultText.textContent = "£" + res.toFixed(2); break;



        case "rubToUzs": res = amount * rates.rub; resultText.textContent = res.toLocaleString() + " so'm"; break;

        case "uzsToRub": res = amount / rates.rub; resultText.textContent = "₽" + res.toFixed(2); break;



        case "kztToUzs": res = amount * rates.kzt; resultText.textContent = res.toLocaleString() + " so'm"; break;

        case "uzsToKzt": res = amount / rates.kzt; resultText.textContent = "₸" + res.toFixed(2); break;



        default: resultText.textContent = "Xato yo'nalish";

    }

}



amountInput.addEventListener("input", convert);

directionSelect.addEventListener("change", convert);



const map = L.map('map').setView([41.311081, 69.240562], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const offices = [
    { name: "Bosh amaliyot BXM", lat: 41.3111, lng: 69.2797, address: "Amir Temur shox ko'chasi, 101" },
    { name: "Sebzor amaliyot BXM", lat: 41.3341, lng: 69.2435, address: "Sebzor ko'chasi, 15" },
    { name: "Yunusobod filiali", lat: 41.3645, lng: 69.2878, address: "Yunusobod 4-kvartal" }
];

const officeList = document.getElementById('office-list');

offices.forEach(office => {
    const marker = L.marker([office.lat, office.lng]).addTo(map);
    marker.bindPopup(`<b>${office.name}</b><br>${office.address}`);

    const item = document.createElement('div');
    item.className = 'office-item';
    item.innerHTML = `<strong>${office.name}</strong><p style="font-size: 12px; color: var(--text-secondary)">${office.address}</p>`;

    item.onclick = () => {
        map.flyTo([office.lat, office.lng], 15);
        marker.openPopup();
    };

    officeList.appendChild(item);
});

console.log("Hello world");
