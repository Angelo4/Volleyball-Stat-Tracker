import { ComponentMeta, ComponentStory } from '@storybook/react';
import Login from './Login';

export default {
  title: 'Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const Playground = Template.bind({});
Playground.args = {};
