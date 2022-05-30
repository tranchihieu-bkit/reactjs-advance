import PropTypes from 'prop-types';
import React from 'react';
const StoreProvider = (extraProps) => (Component) => {
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

          componentDidMount() {
               this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
               // this.context.store.startClock();
          }
          onStoreChange = () => {
               // this.setState({ ...this.props.store.getState() });
               this.forceUpdate();
          }
          componentWillUnmount() {
               this.context.store.unsubscribe(this.subscriptionId);
          }

          render() {
               return <Component
                    {...this.props}
                    {...extraProps(this.context.store, this.props)}
                    store={this.context.store}
               />
          }
     }

}
export default StoreProvider;