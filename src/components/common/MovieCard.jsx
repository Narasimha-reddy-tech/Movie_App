import React from 'react'

const MovieCard = ({ movie }) => {
  // console.log(movie)
  const { poster_path, title, release_date } = movie
  return (
    <div>

      <div className="card shadow">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." style={{ width: "100%", height: "300px" }} />
        <div className="card-body">
          <h5 className="card-title">Title: {title}</h5>
          <p className="card-text">Release date: {release_date}</p>
          <a href="#" className="btn btn-primary">Book Ticket</a>
        </div>
      </div>


    </div>
  )
}

export default MovieCard
