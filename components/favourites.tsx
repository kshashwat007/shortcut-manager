import React from 'react'

const dataExcel = [
    {
        shortcut_name: "Select All", shortcut_key: "Ctrl + C",
    },
    {
        shortcut_name: "Applies Bold formatting", shortcut_key: "Ctrl + B"
    }
]

const dataVscode = [
    {
        shortcut_name: "Select All", shortcut_key: "Ctrl + C",
    },
    {
        shortcut_name: "Applies Bold Formatting", shortcut_key: "Ctrl + B"
    }
]
const Favourites = () => {
  return (
    <div className="join join-vertical w-full">
        <h1 className='p-4'>
            Favourites     
        </h1>
        <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-md font-medium">
            Excel
            </div>
            <div className="collapse-content"> 
            {dataExcel.map(({shortcut_name,shortcut_key}) => (
                <div key={shortcut_name} className='flex flex-row justify-between hover:bg-[#141414] p-2'>
                    <p className='font-bold text-l'>{shortcut_name}</p>
                    <p> {shortcut_key} </p>
                </div>
            ))}
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-md font-medium">
            Vscode
            </div>
            <div className="collapse-content"> 
            {dataVscode.map(({shortcut_name,shortcut_key}) => (
                <div key={shortcut_name} className='flex flex-row justify-between hover:bg-[#141414] p-2'>
                    <p className='font-bold text-l'>{shortcut_name} </p>
                    <p>{shortcut_key} </p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Favourites