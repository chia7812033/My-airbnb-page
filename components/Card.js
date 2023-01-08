import React from "react"

export default function Card(props) {
  let badgeText
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      <img src={`./images/${props.card.coverImg}`} className="card--img" />
      {badgeText && <button className="card--info">{badgeText}</button>}
      <div>
        <div className="card--star">
          <img src="./images/star.png" className="card--starimg" />
          <h6>{props.card.stats.rating}</h6>
          <h6 className="card--number">({props.card.stats.reviewCount})-{props.card.location}</h6>
        </div>
      </div>
      <div>{props.card.title}</div>
      <div><b>From ${props.card.price}</b> / person</div>
    </div>
  )
}
