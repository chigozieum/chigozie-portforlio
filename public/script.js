// Your JavaScript logic goes here
$(document).ready(function () {
  // Fetch and display projects dynamically
  fetchProjects();
});

function fetchProjects() {
  // Example: Fetch projects from an API or use a static array
  const projects = [
    { name: 'Project 1', description: 'Description of Project 1', link: '#' },
    { name: 'Project 2', description: 'Description of Project 2', link: '#' },
    // Add more projects as needed
  ];

  const projectsContainer = $('#projects-container');

  projects.forEach(project => {
    const projectHTML = `
      <div class="project">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Learn More</a>
      </div>
    `;
    projectsContainer.append(projectHTML);
  });
}
