import React, { Component, useState } from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd'
import './Menu.css'

export default function Menu(props) {
	const [newItem, setNewItem] = useState(false)

	const add = () => {
		setNewItem(true);
	}

	const cancelNewItem = () => {
		setNewItem(false);
	}

	return (
		<div className='container'>
			<div className='subcontainer'>
				<div className="logo">
					{ props.title }
				</div>
				<div className="search">
					<Search onSearch={props.onSearch}></Search>
				</div>
				<div className="actions">
					<button onClick={add} className="button btn-blue">
						+ Añadir nuevo libro
					</button>
				</div>
			</div>
			{
				newItem ? <PanelAdd onCancel={cancelNewItem} onAdd={props.onAdd}></PanelAdd> : ''
			}
		</div>
	)
}