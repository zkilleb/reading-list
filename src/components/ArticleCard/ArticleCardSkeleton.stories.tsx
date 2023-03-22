import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCardSkeleton } from './ArticleCardSkeleton';

export default {
  title: 'Components/ArticleCardSkeleton',
  component: ArticleCardSkeleton,
  parameters: {},
} as ComponentMeta<typeof ArticleCardSkeleton>;

const Template: ComponentStory<typeof ArticleCardSkeleton> = () => (
  <ArticleCardSkeleton />
);

export const Default = Template.bind({});
