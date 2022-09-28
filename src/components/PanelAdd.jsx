import React, { Component, useState } from 'react'

export default function PanelAdd(props) {
    const [form, setForm] = useState({
        title: '',
        image: '',
        rating: 1,
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.info(form)

        props.onAdd(form)
        props.onCancel()
    }

    return (
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>Título del libro</label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            className="input"
                            onChange={handleChange}
                        />
                    </p>

                    <p>
                        <label>Nombre de imagen</label>
                        <br />
                        <input
                            type="text"
                            name="image"
                            className="input"
                            onChange={handleChange}
                        />
                    </p>

                    <p>
                        <label>Calificación</label>
                        <br />
                        <select name="rating" onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <input
                        type="submit"
                        className="button btn-blue"
                        value="Registrar libro"
                    />
                    <button
                        className="button btn-normal"
                        onClick={props.onCancel}
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    )
}
