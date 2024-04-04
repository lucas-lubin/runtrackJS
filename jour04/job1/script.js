document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('expression').textContent = data;
        })
        .catch(error => console.error('Erreur:', error));
});