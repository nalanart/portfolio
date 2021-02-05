import './styles/Cta.css'

const Cta = () => {
  return (
    <div className="site-cta__inner">
      <div className="site-cta__content">
        <h2 className="site-cta__title">Let's Work Together</h2>
        <p className="site-cta__subtitle">Have any questions?</p>
        <a className="site-cta__btn btn btn-primary btn-lg" href="/contact">Get In Touch</a>
      </div>
      <div className="socials">
        <ul className="socials-list">
          <li className="socials-list__item"><a href="#">alantran96@gmail.com</a></li>
          <li className="socials-list__item"><a href="https://www.linkedin.com/in/alan-tran-97a287140/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li className="socials-list__item"><a href="https://github.com/nalanart" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Cta