function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const bodyDiv = document.body;
            const params = data.parameters;
            const resolutions = params.resolutions;
            mainDiv.style.backgroundImage = `url(${resolutions[4]})`;
            
            // Apply styles to the main div
            mainDiv.style.width = resolutions[0] + 'px';
            mainDiv.style.height = resolutions[1] + 'px';
            bodyDiv.style.backgroundColor = resolutions[2];
            bodyDiv.style.backgroundImage = `url(${resolutions[3]})`;
        })
        .catch(error => console.error('Error loading game:', error));
}
