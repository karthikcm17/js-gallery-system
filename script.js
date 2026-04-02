const images = [
    { id: '01', title: 'Mountain Mist', sub: 'Highlands Explorer', url: 'Assets/Mountain.jpg' },
    { id: '02', title: 'Urban Pulse', sub: 'City Architecture', url: 'Assets/Urban.jpg' },
    { id: '03', title: 'Deep Forest', sub: 'Evergreen Nature', url: 'Assets/Deep.jpg' },
    { id: '04', title: 'Ocean Blue', sub: 'Coastal Serenity', url: 'Assets/Ocean.jpg' },
    { id: '05', title: 'Desert Gold', sub: 'Sahara Expedition', url: 'Assets/Desert.jpg' },
    { id: '06', title: 'Arctic Chill', sub: 'Glacial Landscapes', url: 'Assets/Arctic.jpg' },
    { id: '07', title: 'River Flow', sub: 'Freshwater Streams', url: 'Assets/River.jpg' },
    { id: '08', title: 'Starry Night', sub: 'Astrophotography', url: 'Assets/Starry.jpg' },
    { id: '09', title: 'Autumn Leaves', sub: 'Seasonal Transitions', url: 'Assets/Autumn.jpg' },
    { id: '10', title: 'Modern Tech', sub: 'Silicon Innovation', url: 'Assets/Modern.jpg' }
];

const wrapper = document.getElementById('galleryWrapper');

wrapper.innerHTML = images.map(img => `
            <div class="img-col" style="background-image: url('${img.url}')">
                <div class="badge-id">${img.id}</div>
                <div class="col-info">
                    <h3>${img.title}</h3>
                    <p>${img.sub}</p>
                </div>
            </div>
        `).join('');