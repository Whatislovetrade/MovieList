import { Component } from 'react';
import './movie-list-item.css'

export default class MovieListItem extends Component {
    render() {
        return (
            <div className="movie-list-item">
                <ul>
                    <li>Hello World</li>
                </ul>

                <div className="btns">
                    <button className="add">Избранное</button>
                    <button className="delete">Удалить</button>
                </div>
            </div>
        )
    }
}