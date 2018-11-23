import React from "react"
import './header.css'

const Header = (props) => {

    const viewIcon = props.isGrid ? <i className="material-icons list-icon">list</i> : <i className="material-icons">view_module</i>

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo title">{props.title}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                    <li><a onClick={props.changeView}>{viewIcon}</a></li>
                    <li><a onClick={props.changeUsers}><i className="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export {
    Header
}

