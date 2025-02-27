import React, { Component } from "react";

export class NewsItem extends Component {



  render() {
    let { title, description, imageUrl, newsUrl} = this.props; //take title and description key from this.props object
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel = "noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
