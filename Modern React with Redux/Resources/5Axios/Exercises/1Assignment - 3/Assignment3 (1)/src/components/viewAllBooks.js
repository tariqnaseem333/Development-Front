import React from "react"
import axios from 'axios';


// You can create functions of your own.

const url = "http://localhost:4000/books/";

class ViewAllBooks extends React.Component {
    state = {
        buttonClicked: false,
        bookData: [],
        errorMessage: ""
    };

    componentDidMount = () => {
        // do relevent logic here
    }

    fetchAllBooks = () => {
        // Implement this by doing a backend call to the url
        // assign the response to bookData id successfulls
        // Handle all errors if any

    }

    render() {
        return (
            <React.Fragment>
                <h3 className="text-primary">Catalog</h3>
                <div className="row" >
                    {/*
                    Use the Book component here to display fetched books
                    */}
                </div>
            </React.Fragment>
        )
    }
}
export default ViewAllBooks;