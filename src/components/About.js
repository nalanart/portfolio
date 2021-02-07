import './styles/About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about__banner">
        <h2 className="banner-title">About Me</h2>
        <p className="banner-subtitle">blah blah blah</p>
      </section>
      <section className="about__content">
        <article className="content-article">
          <h2>Who I Am</h2>
          <p>Text goes here</p>
        </article>
      </section>
    </div>
  )
}

export default About