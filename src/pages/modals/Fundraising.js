import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Fundraising() {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <img src="/static/images/owl.webp" alt="Fundraising" className="absolute right-[0%] top-[11%] cursor-pointer false w-[15%] h-auto" onClick={openModal} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4 ">
                      <button className="absolute right-[20%] top-[16%] animate-in fade-in-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-red-400 p-2 text-black" onClick={closeModal}>X</button>  
                  </div>
                  {/* animate-in fade-in-50 absolute right-[20%] top-[16%] duration-200 md:right-[24%] */}
                  <img src='/popup/fund-close.webp' className='mx-auto h-auto w-[80%] lg:w-[90%] ' />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
