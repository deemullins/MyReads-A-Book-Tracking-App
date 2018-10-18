/* Ryan Waite 9/22/18 https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be 
Unexpected mix of '&&' and '||' https://stackoverflow.com/questions/41899606/mixed-operators-in-jsx 
*/

import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListBooks from '../src/components/ListBooks';
import SearchBooks from '../src/components/SearchBooks';
import { Switch } from 'react-router';
import NoMatch from '../src/components/NoMatch';

class BooksApp extends React.Component {
  //Keep track of page using browser url
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ListBooks} />
        <Route exact path="/search" component={SearchBooks} />
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default BooksApp;