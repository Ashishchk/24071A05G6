import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/plans">Plans</NavLink>
      <NavLink to="/payment">Payment</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  )
}

export default Navbar
