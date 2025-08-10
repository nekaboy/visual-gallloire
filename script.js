document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const items = [
        { type: 'image', src: 'https://via.placeholder.com/300', title: 'Sample Artwork 1' },
        { type: 'image', src: 'https://via.placeholder.com/300', title: 'Sample Artwork 2' },
        { type: 'audio', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Sample Song' }
    ];
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `<h3>${item.title}</h3>`;
        if (item.type === 'image') {
            div.innerHTML += `<img src="${item.src}" alt="${item.title}" />`;
        } else if (item.type === 'audio') {
            div.innerHTML += `<audio controls src="${item.src}"></audio>`;
        }
        gallery.appendChild(div);
    });
});