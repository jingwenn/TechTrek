import { React, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {Dialog, Transition} from '@headlessui/react';
import { useForm } from 'react-hook-form'


const Popover = (props) => {

  // isOpen = props.isOpen
  // closeModal = props.closeModal
  
  // const closePopover = () => {
  //   setIsOpen(false);
  // }

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
                      {/* <label type="text" className='text-black flex flex-col w-full'>
                            Name
                          <input className='border my-2' {...register('name')}/>
                      </label>
                      <label className='text-black flex flex-col w-full'>
                            Cost
                          <input type="number" className='border my-2' {...register('cost')}/>
                      </label>
                      <label className='text-black flex flex-col w-full'>
                            Notes
                          <input type="text" className='border my-2' {...register('notes')}/>
                      </label> */}
                      <div className="mt-4 flex justify-end">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
    // <>
    //   <Transition appear show={props.isOpen} as={Fragment}>
    //     <Dialog as={div} className="relative z-10" onClose={props.closeModal}>
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="fixed inset-0 bg-black/25"/>
    //       </Transition.Child>
    //       <div className="">
    //         <div>
    //           <Transition.Child
    //             as={Fragment}
    //             enter="ease-out duration-300"
    //             enterFrom="opacity-0 scale-95"
    //             enterTo="opacity-100 scale-100"
    //             leave="ease-in duration-200"
    //             leaveFrom="opacity-100 scale-100"
    //             leaveTo="opacity-0 scale-95"
    //           >
    //             <Dialog.panel className="w-full max-w-md w-full transform ">
    //               <Dialog.Title 
    //                 as={h3}
    //                 className="text-lg font-medium text-gray-900 leading-6"
    //               >
    //                 Destination Information
    //               </Dialog.Title>
    //               <div className="text-sm text-gray-500">
    //                 <form>
    //                   <label>
    //                     Destination name
    //                     <input 
    //                       type="text"

    //                     />
    //                   </label>
    //                   <label>
    //                     Cost
    //                     <input
    //                       type="number" 
    //                     />
    //                   </label>
    //                   <label>
    //                     Notes
    //                     <input 
    //                       type="text"
    //                     />
    //                   </label>
    //                   <div className="mt-4 flex w-full justify-end">
    //                     <button>
    //                       Save
    //                     </button>
    //                   </div>
                      
    //                 </form>

    //               </div>

    //             </Dialog.panel>
    //           </Transition.Child>
    //         </div>
    //       </div>

    //     </Dialog>
    //   </Transition>      
    // </>
  );
}

Popover.propTypes = {

}

export default Popover
