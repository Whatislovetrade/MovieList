import { Component } from 'react';
import './movie-list-item.css';

export default class MovieListItem extends Component {
    render() {
        const { title, genre, year } = this.props
        return (
        <li className="item-list list-group-item d-flex justify-content-between align-items-center">
            <span>
                <strong>{title}</strong> <br />
                <small>{genre}, {year}</small>
            </span>
            <div>
                <button className="btn btn-outline-success me-2 btn-sm">
                    <i className="bi bi-star"></i> {/* Иконка "Звезда" */}
                </button>
                <button className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash"></i> {/* Иконка "Мусорная корзина" */}
                </button>
            </div>
        </li> 
        )
    }
}
