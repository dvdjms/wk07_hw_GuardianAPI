import React from 'react';
import { Chart } from "react-google-charts";
import './NewsChart.css'

const NewsChart = ({news}) => {
    
    const NewsSections = news?.map((news) => {
        return news.pillarName
    });

    const NewsS = 'News';
    const LifestyleS = 'Lifestyle';
    const SportS = 'Sport';
    const OpinionS = 'Opinion';
    const ArtsS = "Arts";

    const NewsSect = NewsSections.filter(c => c === NewsS).length;
    const LifestyleSect = NewsSections.filter(c => c === LifestyleS).length;
    const SportsSect = NewsSections.filter(c => c === SportS).length;
    const OpinionSect = NewsSections.filter(c => c === OpinionS).length;
    const ArtsSect = NewsSections.filter(c => c === ArtsS).length;

    const data = [
        ["News Section", "News Output"],
        ["News", NewsSect],
        ["Lifestyle", LifestyleSect],
        ["Sport", SportsSect],
        ["Opinion", OpinionSect],
        ["Arts", ArtsSect],
    ];
      
    const options = {
        title: "News Sections",
    };
      
    return (
        <div id="chart">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"300px"}
            />
        </div>
    );
}
     

export default NewsChart
