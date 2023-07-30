// JavaScript for modal functionality

// Object to store movie data
const moviesData = {
    "harrypotter": {
        trailerUrl: "https://youtu.be/VyHV0BRtdxo",
        description: " The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures."
    },
    "antman": {
        trailerUrl: "YOUR_TRAILER_URL_HERE",
        description: "Description of Ant-Man movie."
    },
    "ironman": {
        trailerUrl: "https://youtu.be/VyHV0BRtdxo",
        description: " The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures."
    },
    "titanic": {
        trailerUrl: "YOUR_TRAILER_URL_HERE",
        description: "Description of Ant-Man movie."
    },
    "captainamerica": {
        trailerUrl: "https://youtu.be/VyHV0BRtdxo",
        description: " The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures."
    },
    "Bahubali-2": {
        trailerUrl: "YOUR_TRAILER_URL_HERE",
        description: "Description of Ant-Man movie."
    },
    "openheimer": {
        trailerUrl: "https://youtu.be/VyHV0BRtdxo",
        description: " The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures."
    },
    "Pirates-of-the-carribean": {
        trailerUrl: "YOUR_TRAILER_URL_HERE",
        description: "Description of Ant-Man movie."
    },
    "Mission-impossible": {
        trailerUrl: "https://youtu.be/VyHV0BRtdxo",
        description: " The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures."
    },
    "alien": {
        trailerUrl: "YOUR_TRAILER_URL_HERE",
        description: "Description of Ant-Man movie."
    }
};

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function showMovieDetails(movieName) {
    const modalContent = document.querySelector('.modal-content');
    const movie = moviesData[movieName];
    if (!movie) {
        modalContent.innerHTML = `<h2>${movieName} Movie not found</h2>
        <button class="close-btn" onclick="closeModal()">Close</button>`;
    }
    else{
        modalContent.innerHTML = `
            <h2>${movieName.toUpperCase()}</h2>
            <div class="iframe-container">
                <iframe src="${movie.trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>${movie.description}</p>
            <button class="close-btn" onclick="closeModal()">Close</button>
        `;
    }
    openModal();
}
