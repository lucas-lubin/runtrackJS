document.getElementById("updateButton").addEventListener("click", updateUserTable);

function updateUserTable() {
    fetch('utilisateur.json')
    .then(response => response.json())
    .then(data => {
        const userTableBody = document.getElementById("userTableBody");
        userTableBody.innerHTML = ""; // Vide le contenu du tableau avant de mettre à jour

        data.forEach(user => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;
            userTableBody.appendChild(tr);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
}
