import React from 'react';
import Article from './ArticleItem';
class ArticleList extends React.PureComponent {

     render() {
          return (
               <React.Fragment>
                    {
                         Object.values(this.props.articles).map((article, index) => <Article
                              key={index}
                              article={article}
                         />)
                    }
               </React.Fragment>
          );
     }
}


export default ArticleList;