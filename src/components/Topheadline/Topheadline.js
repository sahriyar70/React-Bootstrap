import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Topheadline = () => {
    const [articles,setArticals]= useState([]);
    useEffect( ()=> {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-02-24&sortBy=publishedAt&apiKey=5f123708827b458b87a1a38d0cf460bd'
        fetch(url)
        .then(res =>res.json ())
        .then(data => setArticals(data.articles));
    }, [])
    return (
        <div>
            <h1>top news :{articles.length} </h1>
            {
                articles.map(article => <News article ={article} ></News>)
            }
        </div>
    );
};

export default Topheadline;