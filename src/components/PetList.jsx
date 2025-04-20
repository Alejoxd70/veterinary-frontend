import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description
} from '@headlessui/react'
import { useState, Fragment } from 'react'

const pets = [
  {
    id: 1,
    name: 'Buddy',
    description: 'A playful golden retriever who loves tennis balls.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 2,
    name: 'Whiskers',
    description: 'A curious tabby cat with a love for cardboard boxes.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 3,
    name: 'Coco',
    description: 'An energetic parrot who mimics your favorite songs.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  },
  {
    id: 4,
    name: 'Nibbles',
    description: 'A gentle rabbit with soft white fur.',
    photo: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
  }

]

export const PetList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPet, setSelectedPet] = useState(null)

  const openDialog = (pet) => {
    setSelectedPet(pet)
    setIsOpen(true)
  }

  return (
    <>
      <div className='bg-white p-6 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Our Lovely Pets</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
          {pets.map((pet) => (
            <button
              key={pet.id}
              onClick={() => openDialog(pet)}
              className='rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition hover:shadow-xl cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
            >
              <img
                src={pet.photo}
                alt={pet.name}
                className='h-48 w-full object-cover'
              />
              <div className='p-4 text-left'>
                <h2 className='text-xl font-semibold'>{pet.name}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  {pet.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
          <div className='fixed inset-0 bg-black/20' aria-hidden='true' />
          <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
            <DialogPanel className='max-w-md w-full space-y-4 border bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl dark:border-gray-700'>
              {selectedPet && (
                <>
                  <DialogTitle className='text-2xl font-bold text-gray-600 dark:text-gray-200'>
                    {selectedPet.name}
                  </DialogTitle>
                  <Description className='text-gray-600 dark:text-gray-300'>
                    Meet your new friend
                  </Description>
                  <img
                    src={selectedPet.photo}
                    alt={selectedPet.name}
                    className='w-full h-64 object-cover rounded-xl'
                  />
                  <p className='text-gray-700 dark:text-gray-200'>
                    {selectedPet.description}
                  </p>
                  <div className='flex justify-end gap-2 pt-4'>
                    <button
                      onClick={() => setIsOpen(false)}
                      className='px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition'
                    >
                      Close
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className='px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition'
                    >
                      Adopt
                    </button>
                  </div>
                </>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  )
}
