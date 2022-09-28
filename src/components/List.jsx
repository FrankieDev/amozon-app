import React from 'react'
import Item from './Item'

export default function List(props) {
    return (
        <div className="list">
            {props.items.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}

                    onUpdateRating={props.onUpdateRating}
                    onRemoveItem={props.onRemoveItem}
                ></Item>
            ))}
        </div>
    )
}
