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
    const { books, selectedBook } = this.props;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h1 className="display-4 text-center">Catalog</h1>
          <div className="row">
            <div className="col-md-8 offset-2">
              {selectedBook && (
              <div className="row">
                <h5 className="text-center">Last edited book: {selectedBook.title} at {selectedBook.timeStamp}</h5>
              </div>
              )}
              <div className="row">
                {books && (
                  books.map((aBook, key) => <Book key={key} book={aBook} />)
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

function mapStateToProps({books, selectedBook}) {
  return {
    books,
    selectedBook,
  }
}

export default connect(mapStateToProps)(ViewAllBooks);