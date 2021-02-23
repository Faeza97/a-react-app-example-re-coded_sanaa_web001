<<<<<<< HEAD
import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent';

// Add your code own within the return statement

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Now</header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of
          HTML syntax. JSX lets us include JavaScript functions right along with
          the HTML, and also allows us to add in components, which are separate,
          self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;
=======
import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;
>>>>>>> 423bf4330e53308a073ef40a2d7db31af4db5ef4
