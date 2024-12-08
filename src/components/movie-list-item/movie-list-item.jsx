import { Component } from 'react';
import './movie-list-item.css';

export default class MovieListItem extends Component {
    render() {
        return (
            <div className="movie-list-item">
                <ul className="list-block list-group">
                    <li className="item-list list-group-item d-flex justify-content-between align-items-center">
                        <span>Hello World</span>
                        <div>
                            <button className="btn btn-outline-success me-2 btn-sm">
                                <i className="bi bi-star"></i> {/* Иконка "Звезда" */}
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="bi bi-trash"></i> {/* Иконка "Мусорная корзина" */}
                            </button>
                        </div>
                    </li>
                    <li className="item-list list-group-item d-flex justify-content-between align-items-center">
                        <span>Hello World</span>
                        <div>
                            <button className="btn btn-outline-success me-2 btn-sm">
                                <i className="bi bi-star"></i>
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </li>
                    <li className="item-list list-group-item d-flex justify-content-between align-items-center">
                        <span>Hello World</span>
                        <div>
                            <button className="btn btn-outline-success me-2 btn-sm">
                                <i className="bi bi-star"></i>
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
