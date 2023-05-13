import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResponsiveAppBar from './ResponsiveAppBar';

export default {
  title: 'App Bar',
  component: ResponsiveAppBar,
} as ComponentMeta<typeof ResponsiveAppBar>;

const Template: ComponentStory<typeof ResponsiveAppBar> = (args) => (
  <ResponsiveAppBar />
);

export const Playground = Template.bind({});
Playground.args = {};
