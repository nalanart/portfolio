import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="projects-hero__inner">
          <div className="projects-hero__content">
            <h1 className="projects-hero__title">Contact Me</h1>
            <h2 className="projects-hero__subtitle">If you'd like to find out more about me, just send me a message!</h2>
          </div>
        </div>
      </section>
      <section className="contact__socials">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Alan Tran</h5>
            <h6 className="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
            <ul>
            <li>alantran96@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/alan-tran-97a287140/" className="card-link">LinkedIn</a></li>
            <li><a href="#" className="card-link">GitHub</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact