import './Layout_Info_Template.css'

const Layout_Info_Template = ({layoutHeading, layoutDescription, isLoading}) => {
  return (
    <div className="layout-info">
        <div className={isLoading ? "layout-heading skeleton" : "layout-heading"}>
          {layoutHeading}
        </div>
        <div className={isLoading ? "layout-description skeleton": "layout-description"}>
          {layoutDescription}
        </div>
      </div>
  )
}

export default Layout_Info_Template
