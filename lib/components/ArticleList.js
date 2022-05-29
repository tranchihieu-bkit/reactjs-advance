import React from 'react';
import Article from './ArticleItem';
const ArticleList = ({ articles, authors, articleActions }) => {
     return (
          <React.Fragment>
               {
                    Object.values(articles).map((article, index) => <Article
                         key={index}
                         article={article}
                         author={authors[article.authorId]}
                         actions={articleActions}
                    />)
               }
          </React.Fragment>
     );
};

export default ArticleList;