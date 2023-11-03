import React, { useState } from 'react'
import { GrAddCircle } from "react-icons/gr";
import { FaReact } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';

interface Shortcut {
  shortcut_name: string;
  shortcut_key: string;
}

interface AppShortcuts {
  [appName: string]: Shortcut[];
}

const data: AppShortcuts = {
  "excel": [{ shortcut_name: "Select All", shortcut_key: "Ctrl + C" }, { shortcut_name: "Applies Bold formatting", shortcut_key: "Ctrl + B" }],
  "vscode": [{ shortcut_name: "Select All", shortcut_key: "Ctrl + C" }, { shortcut_name: "Applies Bold formatting", shortcut_key: "Ctrl + B" }]
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Content = ({searchQuery}: {searchQuery: string}) => {
  
  const filteredAppNames = Object.keys(data).filter((appName) =>
    appName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="join join-vertical w-full">
      <div className='p-2 m-2 flex flex-row gap-3 items-center'>
        <FaCirclePlus style={{ color: 'white', fontSize: '1 rem' }} />
        <a className="link">Create Shortcut</a>
      </div>
      
      {filteredAppNames.map((appName) => (
        <div className="collapse collapse-arrow join-item border border-base-300" key={appName}>
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-md font-medium">{capitalizeFirstLetter(appName)}</div>
          <div className="collapse-content">
            {data[appName].map(({ shortcut_name, shortcut_key }) => (
              <div key={shortcut_name} className="flex flex-row justify-between hover:bg-[#141414] p-2">
                <p className="font-bold text-l">{shortcut_name}</p>
                <kbd className="kbd">{shortcut_key}</kbd>
              </div>
            ))}
          </div>
        </div>
      ))}
        
    </div>
  )
}

export default Content