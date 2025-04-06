// different ways to fetch any data in react

// fetch
// axios
// react-query
// redux-thunk
// rtk (redux-toolkit query)


const fetchMovies = async (type = "popular") => {
    try {
        let movies = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/${type}?api_key=${import.meta.env.VITE_API_KEY}`)
        let data = await movies.json()
        console.log(data.results) || []

        return data.results
    } catch (error) {
        console.log(error.name)
        return []

    }
}

export default fetchMovies

// function for searching movies
export const fetchMoviesBySearch = async (query, page = 1) => {

    try {
        let searchedMovies = await fetch(`${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}&page=${page}`)
        let data = await searchedMovies.json()
        return data.results || [] // error handling  // if no data returns empty array
    } catch (error) {
        console.log(error.name)
        return []

    }
}