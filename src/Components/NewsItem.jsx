import React from 'react';
import './NewsItem.css';


const NewsItem = ({webTitle, webUrl, webPublicationDate, pillarName}) => {

const date = webPublicationDate.slice(0,10);

    return (
        <li>
            <div id="title">{webTitle}</div>
            <div id="link">
                <a href={webUrl} rel="noreferrer" target="_blank">View Article</a>
            </div>
            <div id="pillarname">{pillarName}</div>
            <div id="date">{date}</div>
        </li>
    
    )
}

export default NewsItem;


