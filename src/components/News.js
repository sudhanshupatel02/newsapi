import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  constructor(props){
    super(props);
    this.state={  
      articles: [],
      loading: false,
      page:1,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(){
    this.props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2dfcc20cf21742789fb4a4e0f7a344f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false,
     })
     this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    // console.log("Previous")
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async ()=>{
    console.log("Next");
  this.setState({page: this.state.page + 1});
  this.updateNews();
}

fetchMoreData = async() => {
   this.setState({page: this.state.page + 1})
   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2dfcc20cf21742789fb4a4e0f7a344f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), //yahi likhane se iscrol bar uper aa raha hai
      totalResults:parsedData.totalResults,
    })
};

  render() {
    console.log("render")
    return (
      <>
        <h1 className="text-center" style={{margin:'40px 0px,'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner/>}        */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
           return  <div className="col my-4" key={element.url}>
             <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
              source={element.source.name}/>
           </div>
          })}
         </div>
         </div>
         </InfiniteScroll>
      </>
    )
  }
}

export default News