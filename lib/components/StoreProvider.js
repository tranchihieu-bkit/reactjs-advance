import PropTypes from 'prop-types';
import React from 'react';
const StoreProvider = (Component) => {
     // ------------------------ Function Component --------------------
     /*
          const WithStore = (props, { store }) => {
               return <Component {...props} store={store} />
          }
     
          WithStore.contextTypes = {
               store: PropTypes.object
          }
          WithStore.displayName = `${Component.name}Container`
          return WithStore;
     */
     // ------------------------ Class Component -------------------------

     return class extends React.Component {
          static displayName = `${Component.name}Container`;
          static contextTypes = {
               store: PropTypes.object
          }
          render() {
               return <Component {...this.props} store={this.context.store} />
          }
     }

}
export default StoreProvider;