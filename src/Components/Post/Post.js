import React, {useState, useEffect} from 'react'
import './Post.css'
import axios from '../../axios'
import {imageUrl, API_KEY} from '../../Constants/constants'
import YouTube from 'react-youtube'

function Post(props) {
    const [movies, setMovies] = useState([])
    const [youtubeId, setYoutubeId] = useState('')
    useEffect(() => {
      axios.get(props.url).then(response => {
        setMovies(response.data.results)
      }).catch(err => {
          alert('Network Error')
      })
    }, [])
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) =>{
            if(response.data.results.length !== 0)
            {
                setYoutubeId(response.data.results[0])
            }else{
                console.log("No Trailer Available");
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj) =>
            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}
        </div>
        {youtubeId && <YouTube opts = {opts} videoId = {youtubeId.key}/>}
    </div>
  )
}

export default Post