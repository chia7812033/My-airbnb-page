import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cards = data.map(card => {
        return <Card
            ket={card.id}
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            country={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}
