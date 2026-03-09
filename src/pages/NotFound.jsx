import {Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h1>Oops! the page you are looking for is not found</h1>
      <Link to="/">back to home page</Link>
    </div>
  )
}

export default NotFound
