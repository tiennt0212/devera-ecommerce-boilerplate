import React from 'react';
import { Welcome } from './test_welcome';
import { HelloWorld } from './test_no_argument';

export default {
    title: 'Components/Test',
}

const template1 = (args) => <Welcome {...args}/>; // the first way to set argument
export const welcome1 = template1.bind();
welcome1.args={
    name: 'Thanh Tien',
}

const template11 = (xyz) => <Welcome {...xyz}/>; //args not fixed, i can use another variables instead of "args"
export const welcome11 = template11.bind();
welcome11.xyz={
    name: 'Thanh Tien 2',
}

const template2 = () => <HelloWorld/>; //no argument
export const helloworld1 = template2.bind();

