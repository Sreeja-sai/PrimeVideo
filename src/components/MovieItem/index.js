// Write your code here

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movies} = props
  const {thumbnailUrl, videoUrl} = movies

  console.log(thumbnailUrl)
  return (
    <div>
      <Popup
        modal
        trigger={
          <img className="eachImage" src={thumbnailUrl} alt="thumbnail" />
        }
      >
        {close => (
          <div className="closeIcon">
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="closeIcon" />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
