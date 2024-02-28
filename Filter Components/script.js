// Example list of apps with additional information for sorting and filtering
const allApps = [
    { name: 'Twiter', rating: 4.5, trending: true, selling: false, releaseDate: '2023-01-15', price: 'Free', category: ['games', 'social'], platform: ['iOS', 'Android'], downloads: 5000000, reviews: 10000, img: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png', info: 'App X is everyones trusted global digital town square.' },
    { name: 'Facebook', rating: 3.8, trending: false, selling: true, releaseDate: '2022-11-20', price: 'Paid', category: ['social', 'utilities'], platform: ['Android'], downloads: 20000000, reviews: 15000, img: 'https://cdn-icons-png.flaticon.com/128/3536/3536394.png', info: 'Whether youre looking for a spark of drumming inspiration or want to dive deeper into something you already love with Marketplace or in groups.' },
    { name: 'Instagram', rating: 4.2, trending: true, selling: true, releaseDate: '2023-05-10', price: 'Free', category: ['utilities'], platform: ['iOS'], downloads: 100000000, reviews: 50000, img: 'https://cdn-icons-png.flaticon.com/128/1409/1409946.png', info: 'Connect with friends, find other fans, and see what people around you are doing. Explore your interests and post what s going on, from your daily moments to life highlights.' },
    { name: 'Messenger', rating: 4.0, trending: false, selling: false, releaseDate: '2024-02-01', price: 'Paid', category: ['games'], platform: ['Windows'], downloads: 5000000, reviews: 8000, img: 'https://cdn-icons-png.flaticon.com/128/5968/5968771.png', info: 'Be together anytime with our free* all-in-one communication app, packed with unlimited text, voice, video calls and group video chat features.' },
    { name: 'Tik Tok', rating: 5.0, trending: true, selling: true, releaseDate: '2022-09-05', price: 'Free', category: ['social', 'games'], platform: ['Android'], downloads: 10000000, reviews: 20000, img: 'https://cdn-icons-png.flaticon.com/128/3938/3938055.png', info: 'Discover videos, music and live broadcasts from around the world and create your own with easy-to-use tools to capture your life.' },
    { name: 'Netflix', rating: 3.7, trending: true, selling: true, releaseDate: '2021-09-05', price: 'Paid', category: ['social'], platform: ['Android', 'iOS'], downloads: 30000000, reviews: 14000, img: 'https://cdn-icons-png.flaticon.com/128/2504/2504929.png', info: 'Looking for the most talked about TV shows and movies from around the world? They re all on Netflix.' }
];

let filteredApps = [...allApps];

document.getElementById('appFilterInput').addEventListener('input', filterApps);
document.getElementById('sortOptions').addEventListener('change', sortApps);
document.getElementById('freeAppsCheckbox').addEventListener('change', filterApps);
document.getElementById('categoryOptions').addEventListener('change', filterApps);
document.getElementById('platformOptions').addEventListener('change', filterApps);
document.getElementById('downloadOptions').addEventListener('change', filterApps);

function filterApps() {
    const filterInput = document.getElementById('appFilterInput').value.toLowerCase();
    const showOnlyFree = document.getElementById('freeAppsCheckbox').checked;
    const selectedCategory = document.getElementById('categoryOptions').value;
    const selectedPlatform = document.getElementById('platformOptions').value;
    const selectedDownloads = document.getElementById('downloadOptions').value;

    filteredApps = allApps.filter(app => {
        const matchesFilter = app.name.toLowerCase().includes(filterInput);
        const isFree = app.price === 'Free';
        const matchesCategory = selectedCategory === 'all' || app.category.includes(selectedCategory);
        const matchesPlatform = selectedPlatform === 'all' || app.platform.includes(selectedPlatform);
        const matchesDownloads = selectedDownloads === 'all' || app.downloads >= parseInt(selectedDownloads);
        return matchesFilter && (!showOnlyFree || isFree) && matchesCategory && matchesPlatform && matchesDownloads;
    });

    sortApps(); // Re-sort after filtering
}

function sortApps() {
    const sortOption = document.getElementById('sortOptions').value;
    switch (sortOption) {
        case 'topRated':
            filteredApps.sort((a, b) => b.rating - a.rating);
            break;
        case 'topTrending':
            filteredApps = filteredApps.filter(app => app.trending);
            break;
        case 'topSelling':
            filteredApps = filteredApps.filter(app => app.selling);
            break;
        case 'newest':
            filteredApps.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            break;
        default:
            // Do nothing for default option or unknown options
            break;
    }
    displayFilteredApps(filteredApps);
}

function displayFilteredApps(apps) {
    const filteredAppsList = document.getElementById('filteredAppsList');
    filteredAppsList.innerHTML = ''; // Clear previous list

    apps.forEach(app => {
        const listItem = document.createElement('li');
        listItem.classList.add('app');
        listItem.innerHTML = `
        <div class="app__header">
            <div class="app__title-content">
                <h2 class="app__name">${app.name}</h2>
                <small class="app__release-date">${app.releaseDate}</small>
            </div>
            <img src="${app.img}"
                alt="icon" class="app__icon">
        </div>
        <p class="app__info">${app.info}</p>
        <div class="app__taggs">
            <ul class="app__category">
                ${app.category.map(category => `<li class="app__tag">${category}</li>`).join('')}
            </ul>
            <ul class="app__platform">
                ${app.platform.map(platform => `<li class="app__tag">${platform}</li>`).join('')}
            </ul>
        </div>
        <div class="app__rating">${getStarRating(app.rating)}</div>
        <div class="app__footer">
            <p class="app__reviews"><u>${app.reviews}</u> reviews</p>
            <span>${app.downloads} downloads</span>
        </div>
    `;
        filteredAppsList.appendChild(listItem);
    });
}

function getStarRating(rating) {
    const roundedRating = Math.round(rating * 2) / 2; // Round rating to nearest 0.5
    const stars = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>'.repeat(Math.floor(roundedRating)) + (roundedRating % 1 === 0.5 ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>' : ''); // Add half star if needed
    return stars;
}

// Initially display all apps in default order
displayFilteredApps(allApps);
