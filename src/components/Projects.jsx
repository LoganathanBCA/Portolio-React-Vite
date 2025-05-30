function Projects() {
  return (
    <section id="projects">
      <h2 className="text-warning text-center">Projects</h2>
      <div className="row">
        {[
          {
            title: "Web Browser (Visual Basic)",
            points: [
              "Implemented Google Chromium open-source framework to support modern websites.",
              "Developed a basic browser with essential features such as backward, forward, home, history, and favorites.",
              "Enhanced user experience by providing two themes - black and white."
            ]
          },
          {
            title: "ADOPLE AI Company Website",
            points: [
              "Modified a template from the internet to create a modern, responsive website for ADOPLE AI.",
              'Deployed at <a href="https://www.adople.com" class="text-warning" target="_blank">www.adople.com</a>',
              "Optimized for performance and SEO, enhancing the company's online presence."
            ]
          },
          {
            title: "Shopping Site with Sentiment Analysis",
            points: [
              "Full-featured e-commerce site with sentiment analysis  using a VADER-based PHP package.",
              "Enabled users to post public reviews while providing the admin with dynamic visualizations via Chart.js.",
              "Tech Stack: PHP, MySQL, JavaScript, Chart.js, HTML, CSS."
            ]
          }
        ].map((project, index) => (
          <div key={index} className="col-md-12 mb-4 bg-secondary p-3 rounded shadow">
            <h3>{project.title}</h3>
            <ul dangerouslySetInnerHTML={{ __html: project.points.map(p => `<li>${p}</li>`).join("") }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
