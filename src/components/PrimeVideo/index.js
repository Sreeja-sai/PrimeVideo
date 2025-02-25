// Write your code here
import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    return (
      <div className="moviesListContainer">
        <img
          className="page-image"
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
        <div className="slideContainer">
          <h1 className="actionHead">Action Movies</h1>
          <div>
            <MoviesSlider
              movieList={moviesList.filter(
                eachSlider => eachSlider.categoryId === 'ACTION',
              )}
            />
          </div>
          <h1 className="comedyHead">Comedy Movies</h1>
          <div>
            <MoviesSlider
              movieList={moviesList.filter(
                eachMovie => eachMovie.categoryId === 'COMEDY',
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
