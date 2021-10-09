import React ,{useState} from 'react'
import './App.css';
import AddModal from './component/AddModal'
import Navbarr from './component/Navbar/Navbarr';
import { moviesData } from './component/MovieData';
import MovieList from './component/MovieListe';
import { Button } from 'react-bootstrap'
import { Switch, Route,} from 'react-router-dom'
import Trailer from './component/Trailer';



const App = () => {
  const [movies , setMovies]= useState(moviesData)
  const [name , setName]= useState("")
  const [ratingSearch , setRatingSearch]= useState(0)
  const [modalShow, setModalShow] = React.useState(false);
  // const [trailer , setTrailer] = useState("moviesData")
  // const [id , setId] = useState(1)

   
  
  return (
    <div className="App">
      <header className="App-header">
       <Navbarr name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} />
      </header>
      <Switch>
      <body  className="body" > 
         <Route exact path ="/" ><MovieList movies={movies} name={name} ratingSearch={ratingSearch} />
         </Route>
        <Route  path="/trailer/:id"  render={ (props) => <div><Trailer className="trailer"  el= {movies} {...props}  /></div>} /> 

          <Route exact path="/" render={() =><>
      <footer>
         <Button variant="primary" onClick={() => setModalShow(true)} className="button">
        Add a new Movie
        
      </Button>

      <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </footer> 
      </>
    } /> 
      </body>
     
       
       </Switch>
     
     
    </div>
  );
}

export default App;
