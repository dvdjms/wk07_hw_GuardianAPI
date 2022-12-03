import React, {useEffect, useState} from "react";
import TitleBar from '../Components/TitleBar';
import NewsList from "../Components/NewsList";
import NewsSearch from "../Components/NewsSearch";
import NewsChart from "../Components/NewsChart";
import './GuardianContainer.css'


const GuardianContainer = () => {
    const [news, setNews] = useState([]);
    const [newSearch, setNewSearch] = useState('news');

    const pages = 200;
    const url = `https://content.guardianapis.com/search?q=${newSearch}&page-size=${pages}&format=json&api-key=test`;

    useEffect(() => {
        loadNews(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

  
    const loadNews = url => {
        fetch(url)
        .then(res => res.json())
        .then(newsList => setNews(newsList.response.results))
        .catch(err => console.error);
    };

    const getNewSearch = (data) => {
        setNewSearch(data);
    };

    return (
        <>
            <div id="header_div">
                <TitleBar />
            </div>
            <div id="new_search_div">
                <NewsSearch onNewSearch={getNewSearch} />
            </div>
            <div id="list_div">
                <NewsList news={news} onNewSearch={getNewSearch} />
            </div>
            <div id="chart_div">
                <NewsChart news={news} />
            </div>

        </>
    )
}

export default GuardianContainer;