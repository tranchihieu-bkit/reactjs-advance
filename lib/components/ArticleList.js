import React from 'react';
import Article from './ArticleItem';
const ArticleList = ({ articles }) => {
     return (
          <React.Fragment>
               {
                    Object.values(articles).map((article, index) => <Article
                         key={index}
                         article={article}
                    />)
               }
          </React.Fragment>
     );
};

export default ArticleList;