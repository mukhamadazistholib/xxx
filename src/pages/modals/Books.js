import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Books() {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <img src="/static/images/books.webp" alt="Fundraising" className="absolute left-[0%] top-[11%] cursor-pointer false w-[22.6%] h-auto" onClick={openModal} />

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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl text-center align-middle shadow-xl transition-all">
                <div className="mt-4">
                    <button
                      type="button"
                      className="absolute right-[17%] flex h-10 w-14 cursor-pointer items-center justify-center bg-transparent focus-within:outline-none"
                      onClick={closeModal}
                    >
                    </button>
                  </div>
                  <img src='/popup/books.webp' className='mx-auto h-auto w-[130%]' />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
