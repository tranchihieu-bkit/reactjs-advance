import React, { Component } from 'react';

class TimeStamp extends Component {

     render() {
          return (
               <div>
                    {this.props.timestamp.toString()}
               </div>
          );
     }
}

export default TimeStamp;