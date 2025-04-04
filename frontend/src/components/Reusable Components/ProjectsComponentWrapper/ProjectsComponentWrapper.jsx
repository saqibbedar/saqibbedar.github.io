import './ProjectsComponentWrapper.css'

const ProjectsComponentWrapper = ({State, children}) => {
  return (
    <div className={
        State ? "projects-box" : "projects-box grid-landscape-toggler"
      }>
      {children}
    </div>
  )
}

export default ProjectsComponentWrapper
