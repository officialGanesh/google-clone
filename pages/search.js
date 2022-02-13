import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import SearchHeader from '../components/searchHeader'
import SearchResults from '../components/searchResults'

function Search({results}) {
  
        

  return (
    <div>

      {/* Header */}
      <SearchHeader />
      {/* Search Results */}
      <SearchResults results={results}/>

    </div>
  )
}

export default Search

// server side rendering
export async function getServerSideProps(context) {

  const indexAt = "0"

  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${indexAt}`).then((res) => {
    return res.json()
  })
  
  return {
    props: {
      results : data
    }
  }
}