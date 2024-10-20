import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    <img src={movie.poster} alt={movie.title} className="modal-poster" />
                    <div className="modal-details">
                        <h2 className="modal-title">{movie.title}</h2>
                        <p><strong>Рейтинг:</strong> {movie.rating}</p>
                        <p><strong></strong> {movie.description}</p>
                        <p><strong>Режиссер:</strong> {movie.director}</p>
                        <p><strong>Актеры:</strong> {movie.cast.join(', ')}</p>
                        <p><strong>Продолжительность:</strong> {movie.duration} мин</p>
                        <button className="buy-ticket-button">Купить билет</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
