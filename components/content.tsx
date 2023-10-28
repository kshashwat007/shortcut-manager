import React from 'react'
import { GrAddCircle } from "react-icons/gr";
import { FaReact } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';

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

const Content = () => {
  return (
    <div className="join join-vertical w-full">

        <div className='p-2 m-2 flex flex-row gap-3 items-center'>
          <FaCirclePlus style={{ color: 'white', fontSize: '1 rem' }} />
          <a className="link">Create Shortcut</a>
        </div>
        
        <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-md font-medium">
            Excel
            </div>
            <div className="collapse-content"> 
              {dataExcel.map(({shortcut_name,shortcut_key}) => (
                  <div key={shortcut_name} className='flex flex-row justify-between hover:bg-[#141414] p-2'>
                      <p className='font-bold text-l'>{shortcut_name}</p>
                      <kbd className="kbd">{shortcut_key}</kbd>
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
                      <kbd className="kbd">{shortcut_key}</kbd>
                  </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Content