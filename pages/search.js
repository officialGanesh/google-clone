import Head from 'next/head'
import React from 'react'
import SearchHeader from '../components/searchHeader'

function Search() {
  return (
    <div>
      <Head>
        <title>Google Search </title>
      </Head>

      {/* Header */}
      <SearchHeader />
      {/* Search Results */}
    </div>
  )
}

export default Search

