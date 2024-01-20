import { React, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {Dialog, Transition, Switch} from '@headlessui/react';
import { useForm } from 'react-hook-form'


const Popover = (props) => {

  // isOpen = props.isOpen
  // closeModal = props.closeModal
  
  // const closePopover = () => {
  //   setIsOpen(false);
  // }

  const [isSelect, setIsSelect] = useState(true);

  const {register, handleSubmit, formState: errors} = useForm()

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Destination Information
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(props.closeModal)}>
                    <div className="py-2">
                  </div>
                      <label type="text" className='text-black flex flex-col w-full'>
                          <span className='w-full flex justify-between'>
                            Name
                              <Switch
                                checked={isSelect}
                                onChange={setIsSelect}
                                className={`${isSelect ? 'bg-teal-900' : 'bg-teal-700'}
                                  relative inline-flex w-1/12 h-[1rem] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 mr-5`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`${isSelect ? 'translate-x-4' : 'translate-x-0'}
                                    pointer-events-none inline-block h-[calc(100%)] w-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                              </Switch>
                            </span>
                          {
                            isSelect ? (
                              <select value={props.data.name} className='border py-0.5 my-2 rounded' {...register('name')}>
                                <option>
                                  name
                                </option>
                              </select>
                            ) : (
                              <input type="text" value={props.data.name} className='border my-2 rounded' {...register('name')}/>
                            )
                          }
                          
                      </label>
                      <label className='text-black flex flex-col w-full'>
                            Cost
                          <input type="number" value={props.data.cost} className='border my-2 rounded' {...register('cost')}/>
                      </label>
                      <label className='text-black flex flex-col w-full'>
                            Notes
                          <textarea type="text" value={props.data.notes} className='border my-2 rounded' {...register('notes')}/>
                      </label>
                      <div className="mt-4 flex justify-end">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            onClick={props.closeModal}
                          >
                            Save
                          </button>
                      </div>
                    </form>
                  </div>

                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

Popover.propTypes = {

}

export default Popover
