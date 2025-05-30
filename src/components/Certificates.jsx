function Certificates() {
  const images = [
    "Mongo DB .png",
    "Data Analytics and Visualization job simulation.png",
    "Healthcare Management Executive.jpg",
    "IBM AISA Certificate copy.png",
    "Introduction to MS Excel.png",
    "IQ General Intelligence.png",
    "macincode.png",
    "Rank 2 - BCA.jpg",
    "Rank 3 - Foundation English.jpg",
    "SE Job Simulation - Crack leaked password.png",
    "Software Engineer Job Simulation.png"
  ];
  
  return (
    <section id="certificates">
      <h2 className="text-center text-warning">Certificates</h2>
      <div className="carousel slide" id="certCarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((src, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={`img/${src}`} className="d-block w-100" alt="Certificate" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
