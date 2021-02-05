import './styles/Featured.css'
import WorkoutApp from '../WorkoutAppPreview.JPG'

const Featured = () => {
  return (
    <div className="site-featured__inner">
      <h2 className="site-featured__title section-title">FEATURED PROJECT</h2>
      <hr></hr>
      <article className="site-featured__preview">
        <img className="site-featured__img" src={WorkoutApp} alt="Workout-app-preview" />
        <div className="site-featured__content">
          <h2 className="site-featured__title">Workout App</h2>
          <p className="site-featured__subtitle">A web app to plan and track your workouts, based off Reddit's PPL program.</p>
          <div className="site-featured__skills">
            <ul className="stack">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
          <a className="site-featured__btn btn btn-primary btn-lg" href="https://hidden-hamlet-50464.herokuapp.com/" target="_blank" rel="noreferrer">View Demo</a>
        </div>
      </article>
    </div>
  )
}

export default Featured