import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './Home';

export default {
  title: 'Routes/Home',
  component: Home,
  parameters: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home />;

export const Default = Template.bind({});
