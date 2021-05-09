import React from 'react';

import { LinkBtn } from './LinkBtn.js';

export default {
  title: 'components/LinkBtn',
  component: LinkBtn,
};

const Template = (args) => <LinkBtn {...args} />;


export const LinkBtn = Template.bind({});
LinkBtn.args = {
  user: {},
};
