import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css'

const NewsList = ({news, onSubmit}) => {
    if (news == null || news.length === 0) {
        return <h2>No results</h2>
    }

    return (
        <div>
            <ul>
                {news.map((news, index) => {
                    return (
                        <NewsItem
                            key={index}
                            webTitle={news.webTitle}
                            webUrl={news.webUrl}
                            pillarName={news.pillarName}
                            webPublicationDate={news.webPublicationDate}
                            onSubmit={onSubmit}
                        />
                    )
                })}
            </ul>
        </div>
    );
};


export default NewsList