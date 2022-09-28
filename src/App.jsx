import React, { State } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu'
import List from './components/List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [
                {
                    id: 0,
                    rating: 4,
                    title: 'Harry Potter y el cáliz de fuego',
                    image: 'libro01.jpg',
                },
                {
                    id: 1,
                    rating: 3,
                    title: 'The shining',
                    image: 'libro02.jpg',
                },
                {
                    id: 2,
                    rating: 5,
                    title: 'Código Da Vinci',
                    image: 'libro03.jpg',
                },
                {
                    id: 3,
                    rating: 5,
                    title: 'El principito',
                    image: 'libro04.jpg',
                },
                {
                    id: 4,
                    rating: 5,
                    title: 'Sobrenatural',
                    image: 'libro05.jpg',
                },
            ],
            copyBooks: [],
        }
    }

    onAdd = (item) => {
        console.log(item)
        let tempBook = [...this.state.books]
        const id = tempBook[tempBook.length - 1].id + 1
        item['id'] = id
        //tempBook.push(item);
        this.setState({ books: [...this.state.books, item] })
        this.initBooks()
    }

    componentDidMount() {
        this.initBooks()
    }

    initBooks = () => {
        this.setState((state, props) => ({
            copyBooks: [...this.state.books],
        }))
    }

    onSearch = (query) => {
        if (query === '') {
            this.initBooks()
        } else {
            const temp = [...this.state.books]
            let res = []

            temp.forEach((item) => {
                if (item.title.toLocaleLowerCase().indexOf(query) > -1) {
                    res.push(item)
                }
            })

            this.setState({
                copyBooks: [...res],
            })
        }
    }

    onUpdateRating = (item) => {
        var temp = [...this.state.books]
        const index = temp.findIndex((x) => x.id == item.id)

        temp[index].title = item.title
        temp[index].image = item.image
        temp[index].rating = item.rating

        this.setState({ books: [...temp] })
        this.initBooks()
    }

    onRemoveItem = (id) => {
        var temp = [...this.state.books]
        const res = temp.filter((item) => item.id == id)

        this.setState({ books: [...res] })
        this.initBooks()
    }

    render() {
        return (
            <div className="App">
                <Menu
                    title="Amozon"
                    onAdd={this.onAdd}
                    onSearch={this.onSearch}
                ></Menu>
                <List
                    items={this.state.copyBooks}
                    onUpdateRating={this.onUpdateRating}
                    onRemoveItem={this.onRemoveItem}
                ></List>
                <div>items</div>
                {Footer()}
            </div>
        )
    }
}

export default App

function Footer() {
    return (
        <div className="footer">
            <strong>
                Derechos reservados {new Date().getFullYear()}. FACodes
            </strong>
        </div>
    )
}
