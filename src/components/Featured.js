import './styles/Featured.css'
import MentionsCrawler from "../utils/images/MentionsCrawler.png";

const Featured = () => {
  return (
    <div className="site-featured__inner">
      <h2 className="site-featured__title section-title">FEATURED PROJECT</h2>
      <hr></hr>
      <article className="site-featured__preview">
        <img className="site-featured__img" src={MentionsCrawler} alt="Workout-app-preview" />
        <div className="site-featured__content">
          <h2 className="site-featured__title">Mentions Crawler</h2>
          <p className="site-featured__subtitle">A web app that scrapes platforms for mentions of your company!</p>
          <div className="site-featured__skills">
            <ul className="stack">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
          <a className="site-featured__btn btn btn-primary btn-lg" href="https://github.com/hatchways/team-dolphin" target="_blank" rel="noreferrer">View Repo</a>
        </div>
      </article>
    </div>
  )
}

export default Featured