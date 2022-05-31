import axios from 'axios';
import React, { Component } from 'react';
import ArticleList from './ArticleList.js';
import pickBy from 'lodash.pickby';
import PropTypes from 'prop-types';
import DataApi from './DataApi.js';
import SearchBar from './SearchBar.js';
import TimeStamp from './Timestamp.js';
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
     appState = () => {
          const { articles, searchTerm } = this.props.store.getState();
          return { articles, searchTerm };
     }
     subscriptionId = null;
     constructor(props) {
          super(props);
          this.state = this.appState();

     }
     setSearchTerm = (searchTerm) => {
          this.setState({ searchTerm: searchTerm });
     }
     // async componentDidMount() {

     //      const resp = await axios.get('/data');
     //      const api = new DataApi(resp.data);
     //      this.setState(api.getState())
     // }
     componentDidMount() {
          this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
          this.props.store.startClock();
     }
     onStoreChange = () => {
          this.setState({ ...this.props.store.getState() });
     }
     componentWillUnmount() {
          this.props.store.unsubscribe(this.subscriptionId);
     }

     render() {
          let { articles, searchTerm } = this.state;
          if (searchTerm) {
               const searchRE = new RegExp(searchTerm, 'i');
               articles = pickBy(articles, (value) => {
                    return value.title.match(searchRE) || value.body.match(searchRE);
               })
          }
          return (
               <React.Fragment>
                    <h1 style={styles.title}>Hello React</h1>
                    <TimeStamp />
                    <SearchBar doSearch={this.setSearchTerm} />
                    <ArticleList
                         articles={articles}
                    />
               </React.Fragment >
          );
     }
}

export default App;