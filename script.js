const images = [
    { id: '01', title: 'Mountain Mist', sub: 'Highlands Explorer', url: '/assets/Mountain.jpg' },
    { id: '02', title: 'Urban Pulse', sub: 'City Architecture', url: '/assets/Urban.jpg' },
    { id: '03', title: 'Deep Forest', sub: 'Evergreen Nature', url: '/assets/Deep.jpg' },
    { id: '04', title: 'Ocean Blue', sub: 'Coastal Serenity', url: '/assets/Ocean.jpg' },
    { id: '05', title: 'Desert Gold', sub: 'Sahara Expedition', url: '/assets/Desert.jpg' },
    { id: '06', title: 'Arctic Chill', sub: 'Glacial Landscapes', url: '/assets/Arctic.jpg' },
    { id: '07', title: 'River Flow', sub: 'Freshwater Streams', url: '/assets/River.jpg' },
    { id: '08', title: 'Starry Night', sub: 'Astrophotography', url: '/assets/Starry.jpg' },
    { id: '09', title: 'Autumn Leaves', sub: 'Seasonal Transitions', url: '/assets/Autumn.jpg' },
    { id: '10', title: 'Modern Tech', sub: 'Silicon Innovation', url: '/assets/Modern.jpg' }
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