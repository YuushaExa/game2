function load_game(type, file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            const params = data.parameters;
            const resolutions = params.resolutions;
            
            // Apply styles to the main div
            mainDiv.style.width = resolutions[0] + 'px';
            mainDiv.style.height = resolutions[1] + 'px';
            mainDiv.style.backgroundColor = resolutions[2];
            mainDiv.style.backgroundImage = `url(${resolutions[3]})`;
            mainDiv.style.backgroundSize = 'cover';
            mainDiv.style.backgroundPosition = 'center';
            mainDiv.style.backgroundRepeat = 'no-repeat';
        })
        .catch(error => console.error('Error loading game:', error));
}
