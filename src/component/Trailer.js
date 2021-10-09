import React, { Fragment, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link,  } from "react-router-dom";


const Trailer = (props) => {
const [movie, setmovie] = useState(props.el)
console.log("movie" , movie)

    const id = props.match.params.id
    console.log(id)
    let x= movie.filter((film)=>film.id== id)
    console.log(x[0].trailer)
   
    return (
    <>
    <h1 style={{color:'white' }} >{x[0].name}</h1>
    <ReactPlayer className='trailervid' url={x[0].Trailer}/>
    <h5 style={{color:'white' }} display={{textAlign:'center'}}>{x[0].description}</h5>
     <div>
        <button className="homebutton">
             <ul className="nav navbar-nav">
          <li>
            <Link to={"/"}>go home</Link>
          </li>
          </ul>
         </button>
        
         
    </div>
</>
    )
    }


export default Trailer