import React from "react"

class Book extends React.Component {
  state = {
    buttonClicked: false
  };

  handleMe = (value) => {
    this.setState(() => ({ buttonClicked: value }));
  }
  render() {
    const { book } = this.props;
    return (
      <div className="card" style={{ "width": 250, "marginLeft": 25 }}>
        <div className="card-body">
          <h5 className="card-title text-center">{book.title}</h5>
          <div className="card-text">
            <span>Author: {book.author}</span><br />
            <span>Genre: {book.genre}</span><br />
            {this.state.buttonClicked === true && (
              <div>
                <br />
                <span>{book.summary}</span><br />
              </div>
            )}
          </div>
          <br />
          <button className="btn btn-success" onClick={() => this.handleMe(true)}>Summary</button><br /><br />
        </div>
      </div>
    )
  }
}
export default Book;