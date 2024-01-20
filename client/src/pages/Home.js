import {React, useState, useContext} from 'react'
import PropTypes from 'prop-types'
import axios, { all } from 'axios'
import { AppContext } from '../context/App.Context'
import Card from '../components/Card';


const Home = props => {
  const { allItineraries, setAllItineraries } = useContext(AppContext); 

  const getItineraries = async (req, res) => {
    axios.get('http://localhost:4000/itenarary/',{
      headers: {
        'Content-Type' : 'application/json',
        'Cookie' : 'uid'
      }
    }).then(() => {
      setAllItineraries(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const removeItineraries = async (req, res) => {
    axios.delete('http://localhost:4000/itenarary/',{
      headers: {
        'Content-Type' : 'application/json',
        'Cookie' : 'uid'
      }
    }).then(() => {
      setAllItineraries(res.data);
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
            <Card >
              
            </Card>
          )
        })}
      </div>
    

    </div>
  )
}

Home.propTypes = {

}

export default Home