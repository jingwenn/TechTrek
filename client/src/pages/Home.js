import {React, useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


const Home = props => {
  const [allItenararies, setAllItenararies] = useState({});

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
