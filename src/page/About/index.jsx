import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>

      <ul className="nav nav-tabs">
        <li>
          <Link to="/other/a">aaa</Link>
        </li>
        <li>
          <Link to="/other/b">bbb</Link>
        </li>
      </ul>

      <Outlet></Outlet>
    </div>
  )
}

export default About
