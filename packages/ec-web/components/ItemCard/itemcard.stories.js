import React from 'react';
import {ItemCard} from './itemcard';

export default{
    title: 'Components/ItemCard',
    component: ItemCard,
};

const template = (args) => <ItemCard {...args}/>;

export const basicItemCard= template.bind({});
export const secondItemCard=template.bind({});
basicItemCard.args={
    imgUrl: '',
    name: 'HP Laptop',
    price: '12.345.678 VND',
}
