import React from 'react';
import { Content } from './content';

export default {
    title: 'Components/Content',
    component: Content
}

const template = (args) => <Content {...args}></Content>;

export const content = template.bind({});

content.args={
    // icon: 'Icon Momo',
    text: 'Momo',
}