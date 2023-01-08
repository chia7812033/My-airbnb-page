import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./images/${props.img}`} className="card--img" />
      <button className="card--info">Sold out</button>
      <div>
        <div className="card--star">
          <img src="./images/star.png" className="card--starimg"/>
          <h6>{props.rating}</h6>
          <h6 className="card--number">({props.reviewCount})-{props.country}</h6>
        </div>
      </div>
      <div>{props.title}</div>
      <div><b>From ${props.price}</b> / person</div>
    </div>
  )
}
