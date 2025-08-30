document.addEventListener('DOMContentLoaded', () => {

// 1. On sélectionne le conteneur HTML où les projets vont être affichés
    const projectsContainer = document.getElementById('projects-container')

fetch('http://127.0.0.1:5000/api/projects')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(project => {
        project.forEach(project => {

            const projectDiv = document.createElement('div');
            projectDiv.className = 'project-card';

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.titre;

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;

            projectDiv.appendChild(projectTitle);
            projectDiv .appendChild(projectDescription);
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        projectsContainer.innerHTML = 'Impossible de charger les projets. Veuillez réessayer plus tard.'
    });


});
