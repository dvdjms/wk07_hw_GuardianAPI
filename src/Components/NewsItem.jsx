import React from 'react';
import './NewsItem.css';


const NewsItem = ({webTitle, webUrl, webPublicationDate, pillarName}) => {

const date = webPublicationDate.slice(0,10);

    return (
        <li>
            <div>{webTitle}</div>
            <div>{date}</div>
            <div>{pillarName}</div>
            <a href={webUrl} rel="noreferrer" target="_blank">View Article</a>
        </li>
    
    )
}

export default NewsItem;


