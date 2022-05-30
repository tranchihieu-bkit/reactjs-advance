import React from 'react';
import Article from './ArticleItem';
const ArticleList = ({ articles, store }) => {
     return (
          <React.Fragment>
               {
                    Object.values(articles).map((article, index) => <Article
                         key={index}
                         article={article}
                         store={store}
                    />)
               }
          </React.Fragment>
     );
};

export default ArticleList;