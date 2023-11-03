'use client'

import Image from 'next/image'
import { register,unregister } from '@tauri-apps/api/globalShortcut'
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect, useState } from 'react';
import Favourites from '@/components/favourites';
import Content from '@/components/content';

function toggleVisibility() {
  invoke('toggle_visibility')
      .catch((error) => {
          console.error(error);
      });
}

async function registerTauri() {
  await register('CommandOrControl+Shift+C', () => {
    console.log('Shortcut triggered');
    toggleVisibility();
    console.log("Window Open")
  });
}

async function unregisterTauri() {
  await unregister('CommandOrControl+Shift+C');
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    registerTauri();

    return () => {
      unregisterTauri()
    }
  }, [])
  return (
    <main className="flex flex-col items-center justify-between ">
      <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={(e) => setSearchQuery(e.target.value)}/>
      <Content searchQuery={searchQuery}/>
    </main>
  )
}
