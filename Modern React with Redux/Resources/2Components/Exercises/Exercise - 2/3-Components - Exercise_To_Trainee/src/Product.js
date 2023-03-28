import React, { Component } from 'react'


class Product extends Component {

     book1 ={
        title : "Angels and Demons",
        publisher : "Penguin Random House",
        author : "Dan Brown",
        price : 409,
        prodId : 2012,
    }
    
     book2 ={
        title : "Norse Mythology",
        publisher : "Bloomsbury Publishing",
        author : "Neil Gaiman",
        price : 300,
        prodId : 2019,
    }

     createCard = (book) => {
        // complete this
      }

    getBookDetails = () => {
        const bookArr = [this.book1, this.book2];
        const element = (
          <div>
                <h3 className="text-center text-primary">Featured Titles</h3>
                <div className="conntainer-fluid">
                    <div className="row"  >
                      {/*
                        // use createCard() here
                      */}
                    </div>
                </div>        
          </div>
        )
        return element;
      }

  render() {
        return (
            <React.Fragment>
              {
                /*Render the final output*/
              }
            </React.Fragment>
        );
    }
}

export default Product;