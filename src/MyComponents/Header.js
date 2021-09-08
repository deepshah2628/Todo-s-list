import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


// If you want to use dirctly title that is used in the parent component than we can specify like this:-export default function Header({title}) and title will be directly specifies like this:-<a className="navbar-brand" href="#">{title}</a>

// By using Link and to a single page application router would be created and route without reloding the page

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>

      </ul>
           {props.searchbar ? <form className="d-flex">
              <formControl className="me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-light btn-outline-success" type="submit">Search</button>
            </form> : "No search bar"}
    </div>
        </div>
      </nav>
    )
}
// Here all things are specified as if they are not passed as props from the parent element than these are their default values
Header.defaultProps={
    title:"default title",
    searchbar:true
}

// This will Give Link warning Errors if the element is given other data than the specified data type 
Header.propTypes = {
    title: PropTypes.string,
    //isRequired means if the specified field (eg-searchbar) is not specified either in parent element or the default props than the console will give Link Error warning
    searchbar:PropTypes.bool.isRequired
}
