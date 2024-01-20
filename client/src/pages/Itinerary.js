import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
import EditDestination from '../components/EditDestination';
import { CiEdit } from "react-icons/ci";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import Popover from '../components/Popover';
import axios from 'axios';



const Itinerary = ({id}) => {
  let [isOpen, setIsOpen] = useState(true)
  const [allDestination, setAllDestination] = useState([])
  const [itinerary, setItinerary] = useState([])

  // useEffect(()=>{
  //   const getItinerary = async () => {
  //     const itineraryFromServer = await getItinerary()
  //     setItinerary(itineraryFromServer)
  //   }

  //   getItinerary()
  // })

  function closeModal() {
    setIsOpen(1)
  }

  function openModal() {
    setIsOpen(0)
  }

  // get Itinerary
  const getItinerary = async(id) => {
      const res = await axios.get(`http://localhost:4000/itinerary/${id}`)

    return res.data
  }

  // Add Itinerary
  const postItinerary = async(id) => {
    const res = await axios.post(`http://localhost:4000/itineraryDestination`)
    return res.data
  }

  // update
  const updateItinerary = async(id) => {
    const updItinerary = {}
    const res = await axios.put(`http://localhost:4000/itinerary/${id}`, updItinerary, {
      headers: {
        'Content-type': 'application/json'
      }
    })

    // setItinerary(itineraries.map{itinerary=>itinerary.id===id? {...itiernary, country:res.data.country}})
  }

    // delete
    const deleteDestination = async(itinerary_id) => {

      await axios.delete(`http://localhost:4000/destination/${itinerary_id}`)
      .try()
      .catch(function(error) {
        if (error.response) {
          console.log(error.response.data)
        }
      })
  
    }

  // get all destination
  const getAllDestination = async(itinerary_id) => {
    const res = await axios(`http://localhost:4000/destination/${itinerary_id}`)

    return res.data
  }

  return (
    <CssBaseline>
      {/* <div className="flex justify-center"> */}
      <Container className="flex flex-col items-center mt-16">
        <Typography variant="h4" className="mb-4">
          Itinerary
        </Typography>


        <div className="w-full max-w-md">
          <div className="flex flex-col mb-4">
            <p className="mb-1">Itinerary Title:</p>
            <TextField id="outlined-basic" variant="outlined" />
          </div>

          <div className="flex flex-col mb-4">
            <p className="mb-1">Country:</p>
            <TextField id="outlined-basic" variant="outlined" />
          </div>

          <div className="flex flex-col mb-4">
            <p className="mb-1">Budget:</p>
            <TextField id="outlined-basic" variant="outlined" />
          </div>
      
          <div className="flex justify-center mb-4">
            <Card data={'country'} />
            {/* Pass itinerary and Id */}
            
            {/* 
            {.map((itinerary_id, destination_id) => {
              return 
              <Card></Card>
            })} */}
          </div>
          <div className="flex justify-center">
            <Button variant="outlined" onClick={openModal}>
              Add Destination
            </Button>

            <Button variant="outlined" onClick={updateItinerary} style={{marginLeft:"10px"}}>
              Save
            </Button>
          </div>

          {/* <div className="flex justify-center">
            <Button variant="outlined" onUpdate={updateItinerary}>
              Save
            </Button>
          </div> */}

        </div>
      </Container>
      {/* <Popover isOpen={isOpen >= 0}/> */}
      {/* </div> */}
    </CssBaseline>
    

  )
}

export default Itinerary
