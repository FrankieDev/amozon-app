import React, { useState, useEffect } from 'react';
import './Item.css'

export default function Item(props) {
	const [stars, setStars] = useState({
		id: '',
		title: '',
		image: '',
		rating: 1,
		stars: []
	})

	useEffect(() => {
		let stars = Array(parseInt(props.rating)).fill(0)
		setStars({
			id: props.id,
			title: props.title,
			image: props.image,
			rating: props.rating,
			stars: stars
		})
	}, [])

	const handleChange = (e) => {
		const rating = parseInt(e.target.value);

		setStars({
			...stars,
			rating: rating,
			stars: Array(parseInt(rating)).fill(0)
		})

		props.onUpdateRating(stars);
	}

	const onRemove = (e) => {
		props.onRemoveItem(props.id);
	}

	return (
		<div className='item'>
			<div className="image">
				<img src={'images/' + stars.image} alt="" />
			</div>
			<div className="title">{stars.title}</div>
			<div className="rating">
				<p>
					{
						stars.stars.map(() => 
							<img src="images/star.png" width="32" alt="" />
						)
					}
				</p>
				<h6>Calificación</h6>
				<select value={stars.rating} onChange={handleChange}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div className="action">
				<button onClick={onRemove}>Eliminar</button>
			</div>
		</div>
	)
}