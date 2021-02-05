import './styles/Hero.css'
import Portrait from '../portrait.jpg'

const Hero = (params) => {
  return (
    <div className="site-hero__inner">
      <div className="site-hero__content">
        <h1 className="site-hero__title">Hi, I'm Alan.</h1>
        <h2 className="site-hero__subtitle">A self-taught web developer from Montreal. I like to create websites and webapps based on my interests.</h2>
        <a className="site-hero__btn btn btn-primary btn-lg" href="/projects">My Projects</a>
      </div>
      <img className="site-hero__portrait" src={Portrait} alt="Alan-portrait" />
    </div>
  )
}

export default Hero