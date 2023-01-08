import React from "react"

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.country === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      <img src={`./images/${props.img}`} className="card--img" />
      {badgeText && <button className="card--info">{badgeText}</button>}
      <div>
        <div className="card--star">
          <img src="./images/star.png" className="card--starimg" />
          <h6>{props.rating}</h6>
          <h6 className="card--number">({props.reviewCount})-{props.country}</h6>
        </div>
      </div>
      <div>{props.title}</div>
      <div><b>From ${props.price}</b> / person</div>
    </div>
  )
}
