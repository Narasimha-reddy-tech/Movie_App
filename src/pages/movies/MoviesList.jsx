import React from 'react'
import fetchMovies, { fetchMoviesBySearch } from '../../api/movieapi'
import { useState, useEffect } from 'react'
import MovieCard from '../../components/common/MovieCard'
import SearchBar from '../../components/common/SearchBar'


const MoviesList = () => {

    const [movies, setMovies] = useState([]) // it stores the movies fetched from an api
    // console.log(movies)
    const [query, setQuery] = useState('')  // passing different search parameters
    const [isLoading, setLoading] = useState(false) // adding loading while fetching and searching


    // useEffect for handling API calls
    useEffect(() => {
        let moviesData;  // this variable stores movie initially and also  store movies when fetched by replacing initial movie
        let getMovies = async () => {
            setLoading(true)
            // movies based on condition
            if (query.trim()) {
                moviesData = await fetchMoviesBySearch(query)
            }
            else {
                moviesData = await fetchMovies("popular")
            }
            setLoading(false)
            setMovies(moviesData)
        }

        // calling the getMovies
        getMovies()

    }, [query])

    // function to handle search
    const handleSearch = (searchQuery) => { // this data is received from search bar as parameter
        setQuery(searchQuery)
    }

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className='container'>
            <SearchBar onSearch={handleSearch} />
            <div className="row gy-2">
                {
                    (movies.length > 0) ? (movies?.map((movie, i) => (
                        <div key={i} className="col-sm-12 col-md-3 col-lg-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))) : (<h2 className='text-danger'>{isLoading ? "Loading" : "No movies Found!"}</h2>)
                }
            </div>

        </div>
    )
}

export default MoviesList
