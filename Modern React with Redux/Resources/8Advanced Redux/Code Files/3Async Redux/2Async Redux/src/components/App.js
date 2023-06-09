import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { getAllBooks, getAllBook_AsyncActionCreator, getAllBooksAPI } from '../actions'

import './App.css';
import AddBook from "./AddBook";
import ViewAllBooks from "./ViewAllBooks";


class App extends Component {

  // componentDidMount = () => {
  //   getAllBooksAPI()
  //     .then((books) => {
  //       this.props.dispatch(getAllBooks(books));
  //     })
  //     .catch(() => {
  //       alert('An error occured. Try again.')
  //     })
  // }


  componentDidMount=()=> {
    this.props.dispatch(getAllBook_AsyncActionCreator());
    
    
    
  }

  render() {
    const { books } = this.props;
    return (
      <Router>
        <Fragment>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Learning Portal</Link>
            </div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/card">View All Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addBook">Add a Book</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">We have <span className="badge badge-success"> {books.length} </span> books</Link>
              </li>
            </ul>
          </nav>
          <br />
          <Switch>
            <Route exact path="/card" component={ViewAllBooks} />
            <Route path="/addBook" component={AddBook} />
            <Route path="/**" render={() => <Redirect to="/card" />} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ books }) {
  return {
    books,
  }
}

export default connect(mapStateToProps)(App);