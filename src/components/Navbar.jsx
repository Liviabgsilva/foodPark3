import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/taverna">Taverna Periódica</Link>
        <Link to="/cereal">Cereal Killer</Link>
        <Link to="/carrinho">🛒</Link>
    </nav>
  )
}

export default Navbar
