import { render, screen } from '@testing-library/react';
import { ArticleCard } from './ArticleCard';

test('renders ArticleCard with image', () => {
  const testProps = {
    title: 'Article Title',
    description:
      'This is a description of the article. It should display under the title.',
    creator: 'Writer McWriterson',
    pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
    mediaThumbnail: '/burki.jpg',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  };
  render(<ArticleCard {...testProps} />);
  const title = screen.getByText('Article Title');
  const description = screen.getByText(
    'This is a description of the article. It should display under the title.',
  );
  const writer = screen.getByText(/Writer McWriterson/i);
  const link = screen.getByText('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  const image = screen.getByAltText('Article image');
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(writer).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test('renders ArticleCard with no image', () => {
  const testProps = {
    title: 'Article Title',
    description:
      'This is a description of the article. It should display under the title.',
    creator: 'Writer McWriterson',
    pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    mediaThumbnail: null,
  };
  render(<ArticleCard {...testProps} />);
  const image = screen.getByAltText('Fallback image');
  expect(image).toBeInTheDocument();
});

test('renders ArticleCard with long description', () => {
  const testProps = {
    title: 'Article Title',
    description:
      'This is a description of the article. It should display under the title. This is some extra text that should translate to ellipsis.',
    creator: 'Writer McWriterson',
    pubDate: 'Mon, 20 Mar 2023 17:56:10 +0000',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    mediaThumbnail: null,
  };
  render(<ArticleCard {...testProps} />);
  const description = screen.getByText(
    'This is a description of the article. It should display under the title....',
  );
  expect(description).toBeInTheDocument();
});
