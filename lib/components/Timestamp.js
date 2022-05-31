import React, { PureComponent } from 'react';
import StoreProvider from './StoreProvider';
class TimeStamp extends PureComponent {

     timeDisplay = timestamp => timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
     shouldComponentUpdate(nextProps, nextState) {
          return this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp)
     }
     render() {
          return (
               <div>
                    {this.timeDisplay(this.props.timestamp)}
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