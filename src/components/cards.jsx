import React from 'react';
import { generate as id } from 'shortid'
// import JABALI5 from '../assets/JABALI5.jpg'

const Card = ({author, date, image, tags, title, views, children}) => {
    return(
        <>
            <div className="card">
                <img src={image} alt=""></img>
                <div className="card-body">
                    {/* <h5 className="card-title">Card {info.card_number}</h5> */}
                    <p className="card-text">{children}</p>
                    <h6 className="card-subtitle text-muted">{author}</h6>
                    <h6>{tags}</h6>
                    <h6>{views} Views</h6>
                    <h6>{date}</h6>
                    <ul>
                        {
                            tags.map(tag => (
                                <li key={id()} className="badge badge-secondary">{tag}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card;