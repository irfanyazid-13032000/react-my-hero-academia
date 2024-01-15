import { Link,Outlet } from "react-router-dom";
export const Nav = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Boku No Hero Academia</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Heroes</Link>
            </li>
           
          </ul>
          <span className="navbar-text">
            All might
          </span>
        </div>
      </div>
    </nav>
    <Outlet></Outlet>
    </div>
  )
}
