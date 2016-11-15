'use strict';

import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="ps-container">{ this.props.children }</div>
  }

}

export default App;
