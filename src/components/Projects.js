import WorkoutApp from '../WorkoutAppPreview.JPG'
import EZmeal from '../EZmeal.JPG'
import './styles/Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-hero__inner">
          <div className="projects-hero__content">
            <h1 className="projects-hero__title">My Projects</h1>
            <h2 className="projects-hero__subtitle">As a self-learner, I couldn't only be reading and studying. Below are projects I worked on to start applying what I learned.</h2>
          </div>
        </div>
      </section>
      <section className="projects-projects">
        <article id="workout-app" className="projects-projects__preview">
          <img className="projects-projects__img" src={WorkoutApp} alt="Workout-app-preview" />
          <div className="projects-projects__content">
            <h2 className="projects-projects__title">Workout App</h2>
            <p className="projects-projects__subtitle">A web app to plan and track your workouts, based off Reddit's PPL program.</p>
            <div className="projects-projects__skills">
              <ul className="stack">
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <a className="projects-projects__btn btn btn-primary btn-lg" href="https://hidden-hamlet-50464.herokuapp.com/" target="_blank" rel="noreferrer">View Demo</a>
          </div>
        </article>
        <article id="ez-meal" className="projects-projects__preview">
          <img className="projects-projects__img" src={EZmeal} alt="Workout-app-preview" />
          <div className="projects-projects__content">
            <h2 className="projects-projects__title">EZmeal</h2>
            <p className="projects-projects__subtitle">An e-commerce site for a meal-kit delivery service where you can plan and choose your meals for the week.</p>
            <div className="projects-projects__skills">
              <ul className="stack">
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <a className="projects-projects__btn btn btn-primary btn-lg" href="https://ez-meal.herokuapp.com/" target="_blank" rel="noreferrer">View Demo</a>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Projects