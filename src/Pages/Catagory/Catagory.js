import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';


const Catagory = () => {
    const CategoryNews = useLoaderData()
    return (
        <div>
            <h2>Catagory has news : {CategoryNews.length}</h2>
            {
                CategoryNews.map(news =>
                    <NewsSummeryCard
                    
                    key={news._id}
                    news={news}>    
                    </NewsSummeryCard>
                )
            }
        </div>
    );
};

export default Catagory;