import React, { Component } from 'react';
import ArticleList from './ArticleList.js';
import DataApt from './DataApi.js';

import { data } from './testData.json';

const api = new DataApt(data);

const styles = {
     title: {
          textAlign: 'center',
          fontSize: '2rem',
          textDecoration: 'underline',
     }
};

class App extends Component {
     constructor() {
          super();
          this.state = {
               articles: api.getArticles(),
               authors: api.getAuthors()
          };
     }
     articleActions = {
          lookupAuthor: authorId => this.state.authors[authorId]
     }
     render() {
          return (
               <React.Fragment>
                    <h1 style={styles.title}>Hello React</h1>
                    <ArticleList
                         articles={this.state.articles}
                         authors={this.state.authors}
                         articleActions={this.articleActions}
                    />
               </React.Fragment>
          );
     }
}

export default App;