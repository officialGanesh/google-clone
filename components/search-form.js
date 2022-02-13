import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

function SearchForm() {
     
    const inputRef = useRef(null)  
    const router = useRouter()
    
    const formHandler = (e) => {
        e.preventDefault()
        const term = inputRef.current.value
        
        if(!term) return;
        router.push(`/search?term=${term}`)
        
    }

  return (
    <main>
        <form className='flex flex-col items-center mt-44 flex-grow'>
            <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt='google-logo' width={300} height={100}/>

            <div className='flex w-full mt-5 hover:shadow-md focus-within:shadow-md max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl '>
                <SearchIcon className='h-5 mr-3 text-gray-500'/>
                <input type="text" className='focus:outline-none flex-grow' ref={inputRef} />
                <MicrophoneIcon className='h-5 cursor-pointer'/>
            </div>

            <div className='flex space-x-4 mt-4'>
                <button className='btn' onClick={formHandler}>Google Search</button>
                <button className='btn' onClick={formHandler}>I'm Feeling Lucky</button>
            </div>

            <div className='flex space-x-3 text-sm mt-5 items-center w-full justify-center '>
                <p className='text-gray-700 '>Google offered in: </p>
                <p className='lang'>हिन्दी</p>
                <p className='lang'>বাংলা</p>
                <p className='lang'>తెలుగు</p>
                <p className='lang'>தமிழ்</p>
                <p className='lang'>ગુજરાતી</p>
                <p className='lang'>मराठी</p>
                <p className='lang'>ਪੰਜਾਬੀ</p>
            </div>
            
        </form>
    </main>
  )
}

export default SearchForm