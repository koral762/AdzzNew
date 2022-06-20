import React, { useState } from 'react'
import { useEffect } from 'react';
import { ArticalPreview } from './ArticalPreview';
import { useSelector } from 'react-redux';

export const Articales = ({ }) => {

    const arts = useSelector(state => state.articales.articalesArray);

    const [viewArticals, satViewArticals] = useState(3);
    const [articalsToView, satArticalsToView] = useState(arts.slice(0, viewArticals));

    useEffect(() => {
        satArticalsToView(arts.slice(0, viewArticals));
    }, [viewArticals, arts])


    return (
        <div className="articales-container">
            <h2>FAQ lorem ipsum h2</h2>

            <div className="articals-rows-container">
                {articalsToView.map(artical => <ArticalPreview key={artical.id} artical={artical} />)}
            </div>

            {(viewArticals < arts.length) && <div className="load-more-container">
                <div className="line"></div>
                <div className="load-more-btn">
                    <p className="load-more" onClick={() => { satViewArticals(viewArticals + 3) }}>LOAD MORE</p>
                    <div className="arrow-load-more"></div>
                </div>
                <div className="line"></div>

            </div>}
        </div>
    )
}