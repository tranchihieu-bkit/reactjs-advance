import React, { Component } from 'react';
import StoreProvider from './StoreProvider';
class TimeStamp extends Component {

     render() {
          return (
               <div>
                    {this.props.timestamp.toString()}
               </div>
          );
     }
}
function extraProps(store, originalProps) {
     return {
          timestamp: store.getState().timestamp
     }
}
export default StoreProvider(extraProps)(TimeStamp);