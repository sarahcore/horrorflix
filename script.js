const movies = [
    {
        title: "Nosferatu",
        year: 1922,
        category: "GOTHIC HORROR",
        poster: "assets/posters/nosferatu.jpg",
        synopsis: "Count Orlok, a mysterious vampire, becomes obsessed with a young woman while bringing terror and plague to her town."
    },
    {
        title: "The Cabinet of Dr. Caligari",
        year: 1920,
        category: "SILENT NIGHTMARES",
        poster: "assets/posters/caligari.jpg",
        synopsis: "A mysterious hypnotist uses a sleepwalker to carry out a series of terrifying crimes in a strange and distorted town."
    },
    {
        title: "The Phantom of the Opera",
        year: 1925,
        category: "CLASSIC HORROR",
        poster: "assets/posters/phantom.jpg",
        synopsis: "A mysterious masked man living beneath the Paris Opera House becomes obsessed with a young singer and will do anything to make her a star."
    },
    {
        title: "The Golem: How He Came into the World",
        year: 1920,
        category: "MONSTERS",
        poster: "assets/posters/golem.jpg",
        synopsis: "A rabbi creates a powerful clay creature to protect his community, but the being eventually escapes its creator's control."
    },
    {
    title: "The Cat and the Canary",
    year: 1927,
    category: "CLASSIC HORROR",
    poster: "assets/posters/cat-canary.jpg",
    synopsis: "Twenty years after a millionaire's death, his relatives gather in an eerie mansion for the reading of his will, where strange events begin to unfold."
},
{
    title: "Dr. Jekyll and Mr. Hyde",
    year: 1920,
    category: "CLASSIC HORROR",
    poster: "assets/posters/jekyll-hyde.jpg",
    synopsis: "A respected doctor experiments with separating the good and evil sides of human nature, unleashing his sinister alter ego, Mr. Hyde."
},
{
    title: "The Hunchback of Notre Dame",
    year: 1923,
    category: "GOTHIC HORROR",
    poster: "assets/posters/hunchback.jpg",
    synopsis: "In medieval Paris, the bell-ringer Quasimodo becomes caught in a tragic story of obsession, cruelty and compassion surrounding the cathedral of Notre Dame."
},
{
    title: "The Man Who Laughs",
    year: 1928,
    category: "GOTHIC HORROR",
    poster: "assets/posters/man-who-laughs.jpg",
    synopsis: "A man permanently disfigured with a terrifying grin becomes a traveling performer while searching for love and a place in a cruel society."
},
{
    title: "Frankenstein",
    year: 1910,
    category: "MONSTERS",
    poster: "assets/posters/frankenstein.jpg",
    synopsis: "A young scientist attempts to create life, but his experiment produces a monstrous being that becomes a terrifying reflection of his own ambition."
},
{
    title: "The Lost World",
    year: 1925,
    category: "MONSTERS",
    poster: "assets/posters/lost-world.jpg",
    synopsis: "An expedition travels to an isolated plateau where prehistoric creatures still roam, bringing humanity face to face with a forgotten world."
},
{
    title: "Häxan",
    year: 1922,
    category: "SILENT NIGHTMARES",
    poster: "assets/posters/haxan.jpg",
    synopsis: "A haunting exploration of witchcraft, superstition and fear combines dramatic scenes with historical imagery to examine beliefs about the supernatural."
},
{
    title: "The Hands of Orlac",
    year: 1924,
    category: "SILENT NIGHTMARES",
    poster: "assets/posters/orlac.jpg",
    synopsis: "After losing his hands in an accident, a pianist receives a transplant and becomes convinced that his new hands belonged to a murderer."
}
];

const movieList = document.getElementById("movie-list");
const categoryButtons = document.querySelectorAll(".categories button");

const movieModal = document.getElementById("movie-modal");
const modalPoster = document.getElementById("modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const modalSynopsis = document.getElementById("modal-synopsis");
const closeModal = document.getElementById("close-modal");

function showMovies(movieArray) {
    movieList.innerHTML = "";

    movieArray.forEach(function (movie) {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <div class="poster-placeholder">
                ${movie.poster 
                    ? `<img src="${movie.poster}" alt="${movie.title} poster">`
                    : "POSTER"}
            </div>

            <h3>${movie.title}</h3>
            <p>${movie.year} • ${movie.category}</p>
        `;

        card.addEventListener("click", function () {
            modalPoster.src = movie.poster;
            modalPoster.alt = movie.title + " poster";

            modalTitle.textContent = movie.title;
            modalDetails.textContent = movie.year + " • " + movie.category;
            modalSynopsis.textContent = movie.synopsis;

            movieModal.style.display = "flex";
        });

        movieList.appendChild(card);
    });
}

showMovies(movies);

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;

        if (selectedCategory === "ALL") {
            showMovies(movies);
        } else {
            const filteredMovies = movies.filter(function (movie) {
                return movie.category === selectedCategory;
            });

            showMovies(filteredMovies);
        }
    });
});
closeModal.addEventListener("click", function () {
    movieModal.style.display = "none";
});
movieModal.addEventListener("click", function (event) {
    if (event.target === movieModal) {
        movieModal.style.display = "none";
    }
});