import React, { PureComponent } from 'react';
import StoreProvider from './StoreProvider';

const timeDisplay = (timestamp) => {
     if (!(timestamp.toLocaleTimeString instanceof Function)) return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

class TimeStamp extends PureComponent {

     render() {
          return (
               <div>
                    {timeDisplay(this.props.timestamp)}
               </div>
          );
     }
}
function extraProps(store) {
     return {
          timestamp: timeDisplay(store.getState().timestamp)
     }
}
export default StoreProvider(extraProps)(TimeStamp);