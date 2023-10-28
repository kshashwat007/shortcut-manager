'use client'

import Image from 'next/image'
import { register } from '@tauri-apps/api/globalShortcut'
import { invoke } from '@tauri-apps/api/tauri';
import { useEffect } from 'react';
import Favourites from '@/components/favourites';
import Content from '@/components/content';



function toggleVisibility() {
  invoke('toggle_visibility')
      .catch((error) => {
          console.error(error);
      });
  
}

export default function Home() {
  useEffect(() => {
    const registerTauri = async () => {
      await register('CommandOrControl+Shift+C', () => {
        console.log('Shortcut triggered');
        toggleVisibility();
        console.log("Window Open")
      });
    }
    registerTauri();

    return () => {
      
    }
  }, [])
  return (
    <main className="flex flex-col items-center justify-between ">
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <Content />
    </main>
  )
}
