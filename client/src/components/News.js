import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    // console.log("This is a constructer from News Component");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){ //This runs after render
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068b96721e3a4b7080dd1244bd8dc51d";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        articles : parsedData.articles,
    })
    
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Newstopia - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element) => {return (
                <div className="col-md-4" key={element.url}> 
                <NewsItem
                  title={element.title ? element.title.slice(0, 100) : ""}
                  description={element.description ? element.description.slice(0, 100): ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
                  newsUrl={element.url}
                />
              </div>
          )})}
            
          </div>
        </div>
      </>
    );
  }
}

export default News;
