import {React, useState, useContext} from 'react'
import PropTypes from 'prop-types'
import axios, { all } from 'axios'
import { AppContext } from '../context/App.Context'


const Home = props => {
  const { allItenararies, setAllItenararies } = useContext(AppContext); 

  const getItenararies = async (req, res) => {
    axios.get('http://localhost:4000/itenarary/',{
      headers: {
        'Content-Type' : 'application/json',
        'Cookie' : 'uid'
      }
    }).then(() => {
      setAllItenararies(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>

    </div>
  )
}

Home.propTypes = {

}

export default Home
