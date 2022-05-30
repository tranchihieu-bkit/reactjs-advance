import axios from 'axios';
import React, { Component } from 'react';
import ArticleList from './ArticleList.js';

import PropTypes from 'prop-types';
import DataApi from './DataApi.js';

// const api = new DataApt(data);

const styles = {
     title: {
          textAlign: 'center',
          fontSize: '2rem',
          textDecoration: 'underline',
     }
};

class App extends Component {
     static childContextTypes = {
          store: PropTypes.object,
     }
     getChildContext() {
          return {
               store: this.props.store,
          }
     }


     constructor(props) {
          super(props);
          this.state = this.props.store.getState();

     }
     async componentDidMount() {
          const resp = await axios.get('/data');
          const api = new DataApi(resp.data);
          this.setState(api.getState())
     }


     render() {
          return (
               <React.Fragment>
                    <h1 style={styles.title}>Hello React</h1>
                    <ArticleList
                         articles={this.state.articles}
                    />
               </React.Fragment>
          );
     }
}

export default App;