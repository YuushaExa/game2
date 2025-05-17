function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const bodyDiv = document.body;
            const params = data.parameters;
            const resolutions = params.resolutions;
            
            // Apply styles to the main div
            mainDiv.style.width = resolutions[0] + 'px';
            mainDiv.style.height = resolutions[1] + 'px';
            mainDiv.style.position = 'absolute';
            bodyDiv.style.backgroundColor = resolutions[2];
            bodyDiv.style.backgroundImage = `url(${resolutions[3]})`;
            bodyDiv.style.backgroundSize = 'cover';
            bodyDiv.style.backgroundPosition = 'center';
            bodyDiv.style.backgroundRepeat = 'no-repeat';
        })
        .catch(error => console.error('Error loading game:', error));
}
