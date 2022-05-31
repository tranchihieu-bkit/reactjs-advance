import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import StoreProvider from './StoreProvider';

class SearchBar extends PureComponent {
     state = {
          searchTerm: '',
     }

     doSearch = debounce(() => {
          this.props.doSearch(this.state.searchTerm);
     }, 300);

     handleSearch = (event) => {
          this.setState({
               searchTerm: event.target.value
          }, () => {
               this.doSearch();
          });
     }
     // shouldComponentUpdate(nextProps,nextState) {
     //      return true;
     // }
     render() {

          return (
               <input

                    type="search"
                    placeholder='Enter search term'
                    onChange={this.handleSearch}
                    value={this.state.searchTerm}
               />
          );
     }
}

export default StoreProvider()(SearchBar);