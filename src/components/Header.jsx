function Header() {
  return (
    <header className="bg-secondary text-warning py-3 text-center">
      <h1 className="display-5">LOGANATHAN M's Portfolio</h1>
      <nav className="mt-3">
        <ul className="nav justify-content-center">
          {[
            "about",
            "projects",
            "certificates",
            "education",
            "internship",
            "objective",
            "contact"
          ].map((id) => (
            <li key={id} className="nav-item">
              <a className="nav-link text-warning" href={`#${id}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
