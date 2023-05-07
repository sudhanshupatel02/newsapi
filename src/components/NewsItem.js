import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className="my-3">
          <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "88%", zIndex:"1"}}>{source} </span>
            <img src={!imageUrl?"https:img.etimg.com/thumb/msid-99121716,width-1070,height-580,imgsize-82254,overlay-etdefence/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{title} </h5>
               <p className="card-text">{description}</p>
               <p className="card-text"><small className="text-body-secondary">By {!author?"unknow":author} on {new Date(date).toGMTString()}</small></p>
               <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
         </div>
      </div>
    )
  }
}

export default NewsItem