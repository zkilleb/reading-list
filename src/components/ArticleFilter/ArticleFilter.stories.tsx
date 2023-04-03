import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleFilter } from './ArticleFilter';

export default {
  title: 'Components/ArticleFilter',
  component: ArticleFilter,
  parameters: {},
} as ComponentMeta<typeof ArticleFilter>;

const Template: ComponentStory<typeof ArticleFilter> = (args) => (
  <ArticleFilter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  articles: [
    {
      title: 'Article Title',
      description:
        'This is a description of the article. It should display under the title.',
      creator: 'Writer McWriterson',
      pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      site: 'Youtube',
      mediaThumbnail: '/widebanner.jpg',
    },
    {
      title: 'This is also a title',
      description:
        'This is a description of the article. It should display under the title.',
      creator: 'Writer McWriterson',
      pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
      link: 'https://www.youtube.com/watch?v=RkJnCXNz1wU',
      site: 'Youtube',
      mediaThumbnail: '/burki.jpg',
    },
    {
      title: 'This is also a title',
      description:
        'This is a description of the article. It should display under the title.',
      creator: 'Writer McWriterson',
      pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
      link: 'https://www.mlssoccer.com/',
      site: 'MLS',
      mediaThumbnail: '/widebanner.jpg',
    },
  ],
};
