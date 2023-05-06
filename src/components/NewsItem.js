import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https:img.etimg.com/thumb/msid-99121716,width-1070,height-580,imgsize-82254,overlay-etdefence/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
               <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
         </div>
      </div>
    )
  }
}

export default NewsItem