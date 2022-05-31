import PropTypes from 'prop-types';
import React from 'react';
const StoreProvider = (extraProps = () => ({})) => (Component) => {
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

     return class extends React.PureComponent {
          static displayName = `${Component.name}Container`;
          static contextTypes = {
               store: PropTypes.object
          }
          usedState = () => {
               return extraProps(this.context.store, this.props);
          }
          state = this.usedState();
          componentDidMount() {
               this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
               // this.context.store.startClock();
          }
          onStoreChange = () => {
               // this.setState({ ...this.context.store.getState() });
               if (this.subscriptionId) {
                    // this.forceUpdate();
                    this.setState(this.usedState());
               }

          }
          componentWillUnmount() {
               this.context.store.unsubscribe(this.subscriptionId);
               this.subscriptionId = null;
          }

          render() {
               return <Component
                    {...this.props}
                    {...this.usedState()}
                    store={this.context.store}
               />
          }
     }

}
export default StoreProvider;