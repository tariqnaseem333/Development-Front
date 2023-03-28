import React, { Component } from "react"
import { connect } from 'react-redux';
import Book from "./Book";

class ViewAllBooks extends Component {
  state = {
    buttonClicked: false,
  };

  handleMe = (value) => {
    this.setState(() => ({ buttonClicked: value }));
  }

  render() {
    const { books } = this.props;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h1 className="display-4 text-center">Catalog</h1>
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="row">
                {books && (
                  Object.keys(books).map((bookIndex, key) => <Book key={key} book={books[bookIndex]} />)
                )}
                {books && (
                  <span className="text-danger">{books.errorMessage}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps({books}) {
  return {
    books,
  }
}

export default connect(mapStateToProps)(ViewAllBooks);