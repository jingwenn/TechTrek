import {React, useState, useContext} from 'react'
import PropTypes from 'prop-types'
import axios, { all } from 'axios'
import { AppContext } from '../context/App.Context'
import Card from '../components/Card';
// import "./Home.css";


const Home = props => {
  const { allItineraries, setAllItineraries, authToken } = useContext(AppContext); 

  const getItineraries = async (req, res) => {
    axios.get('http://localhost:4000/itinerary/',{
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'authToken'
      }
    }).then(() => {
      setAllItineraries(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

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
      <header>
        <h1>My Itineraries</h1>
      </header>
      <div class="flex justify-center">
        <Card data={
          "Singapore"
        }/>
      </div>
      <div>
        {allItineraries.map((itinerary) => {
          return (
            <Card title={itinerary.title} budget={itinerary.budget}/>
          )
        })}
      </div>
    

    </div>
  )
}

Home.propTypes = {

}

export default Home