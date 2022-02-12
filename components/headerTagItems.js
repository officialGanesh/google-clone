import React from 'react'
import HeaderTagOptions from './headerTagOptions'
import {DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from "@heroicons/react/outline"


function HeaderTagItems() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-44 border-b-[1px]'>

      <div className='flex space-x-6'>
          <HeaderTagOptions Icon={SearchIcon} title="All" selected/>
          <HeaderTagOptions Icon={PhotographIcon} title="Images"/>
          <HeaderTagOptions Icon={PlayIcon} title="Videos"/>
          <HeaderTagOptions Icon={NewspaperIcon} title="News"/>
          <HeaderTagOptions Icon={MapIcon} title="Maps"/>
          <HeaderTagOptions Icon={DotsVerticalIcon} title="More"/>
      </div>

      <div className='flex space-x-4 justify-center'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>

    </div>
  )
}

export default HeaderTagItems