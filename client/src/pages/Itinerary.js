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
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Popover from '../components/Popover';
import axios from 'axios';



const Itinerary = ({id}) => {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(1)
  }

  function openModal() {
    setIsOpen(0)
  }

  // get Itinerary
  const getItinerary = async(id) => {
    const res = await axios.get("")

    return res.data
  }

  // post Itinerary
  const postItinerary = async(id) => {
    const res = await axios.post("")

    return res.data
  }

  // update
  const updateItinerary = async(id) => {
    const res = await axios.put("")

    return res.data
  }

    // delete
    const updateItinerary = async(itinerary_id) => {
      const res = await axios.put("")
  
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

            {/* {Itineraries.map((itinerary_id, destination_id) => {
              return 
              <Card></Card>
            })} */}
          </div>
          <div className="flex justify-center">
            <Button variant="outlined" onClick={openModal}>
              Add
            </Button>
          </div>
        </div>
      </Container>
      {/* <Popover isOpen={isOpen >= 0}/> */}
      {/* </div> */}
    </CssBaseline>
    

  )
}

export default Itinerary
