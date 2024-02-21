import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/home">
        <div>People App</div>
      </Link>
    </nav>
  )
}

export default Header