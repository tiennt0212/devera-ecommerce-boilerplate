import React from 'react';
import ProTypes from 'prop-types';
import './itemcard.css';

export const ItemCard = (props)=>{
    const {imgUrl, name, price, onClick} = props;
    return(
        <div className="item-card" onClick={onClick}>
            <div className="img-thumbnail">
                <img src={imgUrl} alt="item-thumbnail"/>
            </div>
            <div className="info">
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

ItemCard.propTypes={
    imgUrl: ProTypes.string,
    name: ProTypes.string,
    price: ProTypes.string,
    onClick:ProTypes.func,
};

ItemCard.defaultProps={
    label:'link btn',
}