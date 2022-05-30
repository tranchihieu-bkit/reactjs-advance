import DataApi from '../components/DataApi.js';

import { data } from '../components/testData.json';

const api = new DataApi(data);

describe('"DataApi"', () => {

     it('exposes articles as an object', () => {
          const articles = api.getState().articles;
          const articleId = data.articles[0].id;
          const articleTitle = data.articles[0].title;

          expect(articles).toHaveProperty(articleId);
          expect(articles[articleId].title).toBe(articleTitle);

     });
     it('exposes authors as an object', () => {
          const authors = api.getState().authors;
          const authorId = data.authors[0].id;
          const authorsFirstName = data.authors[0].firstName;

          expect(authors).toHaveProperty(authorId);
          expect(authors[authorId].firstName).toBe(authorsFirstName);
     });
});