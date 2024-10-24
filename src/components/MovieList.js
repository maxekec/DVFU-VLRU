import React, { useState } from 'react';
import { movies } from './movies';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import './MovieList.css';

const MovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} onShowModal={handleShowModal} />
            ))}
            <MovieModal isOpen={isModalOpen} onClose={handleCloseModal} movie={selectedMovie} />
        </div>
    );
};

export default MovieList;
