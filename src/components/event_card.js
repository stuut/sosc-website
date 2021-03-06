import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import { relative } from 'path'
import DateIcon from '../images/date_icon.svg'

const Card = (props) => (
        <div className="card elevate white-bg">
            <div className="card-container">
                <img className="card-header-img" src={props.cover.publicURL} alt="Card Image Text"/>
                <div className="card-text">
                    <h2 className="card-header-text">
                    <Link to={props.slug}>{props.title}</Link>
                    </h2>
                    <div className="card-date">
                        <img src={DateIcon} className="card-date-icon" alt="date icon"/>
                        <p className="card-date-text">
                       {props.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
)

export default Card