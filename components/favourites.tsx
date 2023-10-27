import React from 'react'

const Favourites = () => {
  return (
    <div className="w-full">
        <h4 className='p-4'>
        Favourites
        </h4>
        <a
            href="#!"
            aria-current="true"
            className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
        >
            Excel
        </a>
        <a
            href="#!"
            className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
        >
            Vscode
        </a>
        
        
    </div>
  )
}

export default Favourites