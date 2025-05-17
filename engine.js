function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const bodyDiv = document.body;
            const params = data.parameters;
            const resolutions = params.resolutions;
            
            // Apply styles to the main div
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;

            bodyDiv.style.backgroundColor = resolutions[2];
            bodyDiv.style.backgroundImage = `url(${resolutions[3]})`;
        })
        .catch(error => console.error('Error loading game:', error));
}
