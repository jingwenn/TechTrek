import {React, useState, useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios, { all } from 'axios'
import { AppContext } from '../context/App.Context'
import Card from '../components/Card';
import {Link} from 'react-router-dom';
import "./Home.css";


const Home = props => {
  const { allItineraries, setAllItineraries, authToken } = useContext(AppContext); 

  const [itineraries, setItineraries] = useState([]);
  const { countryMapping } = useContext(AppContext);

  useEffect(() => {
    axios.get('http://192.168.52.221:4000/itinerary/')
    .then(
      function (res) {
        console.log(res.data);
        setItineraries(res.data);
      }
    )
    .catch(
        function(err) {
            console.log(err);
        }
    )
    }, []);

  const itineraryList = itineraries.map(itinerary =>
    <li>
      <Card title={itinerary.title} budget={itinerary.budget} data={{}}/>
    </li>
  );

  const removeItinerary = async (id) => {
    axios.delete('/:id',{
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : authToken
      }
    }).then(() => {
      setAllItineraries(allItineraries.filter((itinerary) => itinerary.id !== id))
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>My Itineraries</h1>
      <div class="flex justify-center">
        <ul>
          {itineraryList}
        </ul>
      </div>

      <Link class="btn" to="/editItinerary">Add New Itinerary</Link>
    

    </div>
  )
}

Home.propTypes = {

}

export default Home