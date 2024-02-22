const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "./music/Vicetone - Nevada (feat. Cozi Zuehlsdorff) [Monstercat Official Music Video].mp3",
            image: "./img/Vicetone - Nevada (feat. Cozi Zuehlsdorff).jpg",
        },
        {
            name: "SummerTime",
            singer: "K-391",
            path: "./music/K-391 - Summertime [Sunshine].mp3",
            image: "./img/K-391 - Summertime [Sunshine].jpg",
        },
        {
            name: "Monody",
            singer: "TheFatRat",
            path: "./music/TheFatRat - Monody (feat. Laura Brehm).mp3",
            image: "./img/TheFatRat (feat. Laura Brehm) - Khúc Tiễn Biệt (Monody).jpg",
        },
        {
            name: "Reality",
            singer: "Lost Frequencies",
            path: "./music/Reality - Lost Frequencies.mp3",
            image: "./img/Reality - Lost Frequencies.jpg",
        },
        {
            name: "Jumbo",
            singer: "Alex Skrindo",
            path: "./music/Alex Skrindo - Jumbo - House - NCS - Copyright Free Music.mp3",
            image: "./img/Alex Skrindo - Jumbo - House - NCS - Copyright Free Music.jpg",
        },
        {
            name: "Be Together",
            singer: "Zaza",
            path: "./music/Zaza - Be Together - Electronic - NCS - Copyright Free Music.mp3",
            image: "./img/Zaza - Be Together - Electronic - NCS - Copyright Free Music.jpg",
        },
        {
            name: "Limitless",
            singer: "Elektronomia",
            path: "./music/Elektronomia - Limitless - Progressive House - NCS - Copyright Free Music.mp3",
            image: "./img/Elektronomia - Limitless - Progressive House - NCS - Copyright Free Music.jpg",
        },
    ],
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
            <div class="song">
                <div
                    class="thumb"
                    style="background-image: url('${song.image}');"
                ></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`;
        });
        $('.playlist').innerHTML = htmls.join('\n');
    },
    handleEvents: function() {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;

        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const newCdWidth = cdWidth - scrollTop;
            
            cd.style.width = newCdWidth >0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }
    },
    start: function () {
        this.defineProperties();
        this.handleEvents();
        this.render();
    },
};

app.start();