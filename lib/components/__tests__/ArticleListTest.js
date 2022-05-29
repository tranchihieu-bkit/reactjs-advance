import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';


describe('ArticleList', () => {

     const testProps = {
          articles: {
               a: { id: 'a', authorId: 'a' },
               b: { id: 'b', authorId: 'b' }
          },
          articleActions: {
               lookupAuthor: jest.fn(() => ({}))
          },
          // authors: {
          //      a: { id: 'a', website: 'https://mywebsite.com' },
          //      b: { id: 'b', website: 'https://mywebsite.com' }
          // }
     };

     it('renders correctly', () => {
          const tree = renderer.create(<ArticleList
               {...testProps}
          />).toJSON();

          expect(tree).toMatchSnapshot();
     });
});


