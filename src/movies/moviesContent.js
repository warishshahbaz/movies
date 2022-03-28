import React from 'react'
import "./movies.css"

function MoviesContent({ text, id }) {
	return (
		<>
			<div className="grid">
				<div className="main-container">
					<div className="poster-container">
						<a href="#"><img src={text.Poster} className="poster" /></a>
					</div>
					<div className="ticket-container">
						<div className="ticket__content">
							<h4 className="ticket__movie-title">{text.Title}</h4>
							<p className="ticket__movie-slogan">
								More human than human is our motto.
							</p>
							<p className="ticket__current-price">$28.00</p>
							<p className="ticket__old-price">$44.99</p>
							<button className="ticket__buy-btn">Buy now</button>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default MoviesContent