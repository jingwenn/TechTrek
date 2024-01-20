import {React, useState} from 'react'
import PropTypes from 'prop-types'
import Popover from '../components/Popover'


const Home = props => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }


  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>
      <Popover isOpen={isOpen} closeModal={() => closeModal()}/>
    </div>
  )
}

Home.propTypes = {

}

export default Home
