import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCard } from './ArticleCard';

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  parameters: {},
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Article Title',
  description:
    'This is a description of the article. It should display under the title.',
  creator: 'Writer McWriterson',
  pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Article Title',
  description:
    'This is a description of the article. It should display under the title.',
  creator: 'Writer McWriterson',
  pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
  mediaThumbnail: '/burki.jpg',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const NoCreator = Template.bind({});
NoCreator.args = {
  title: 'Article Title',
  description:
    'This is a description of the article. It should display under the title.',
  pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
  mediaThumbnail: '/burki.jpg',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: 'Article Title',
  description:
    'This is a description of the article. It should display under the title. This is some extra text that should translate to ellipsis.',
  pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
  mediaThumbnail: '/burki.jpg',
  creator: 'Writer McWriterson',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const WideImage = Template.bind({});
WideImage.args = {
  title: 'Article Title',
  description:
    'This is a description of the article. It should display under the title. This is some extra text that should translate to ellipsis.',
  pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
  mediaThumbnail: '/widebanner.jpg',
  creator: 'Writer McWriterson',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};
