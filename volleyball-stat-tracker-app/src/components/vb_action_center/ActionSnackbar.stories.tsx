import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActionSnackbar from './ActionSnackbar';

export default {
  title: 'ActionSnackbar',
  component: ActionSnackbar,
  argTypes: { setOpen: { action: 'clicked' } },
} as ComponentMeta<typeof ActionSnackbar>;

const Template: ComponentStory<typeof ActionSnackbar> = (args) => (
  <ActionSnackbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: 'Default',
  // open: snackbarOpen,
  // setOpen: setSnackbarOpen,
};
