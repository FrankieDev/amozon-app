import React, { Component } from 'react'

export default function Search(props) {
    const handleChange = (e) => {
        const query = e.target.value.toString().toLowerCase()
        props.onSearch(query)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    )
}
