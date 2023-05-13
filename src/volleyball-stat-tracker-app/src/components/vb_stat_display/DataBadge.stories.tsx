import { ComponentMeta, ComponentStory } from '@storybook/react';
import DataBadge from './DataBadge';

export default { title: 'DataBadge', component: DataBadge } as ComponentMeta<
  typeof DataBadge
>;

const Template: ComponentStory<typeof DataBadge> = (args) => (
  <DataBadge {...args} />
);

export const Primary = Template.bind({});
Primary.args = { title: 'Test', data: 1 };
