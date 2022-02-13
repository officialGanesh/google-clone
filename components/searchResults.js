import Link from "next/link";
import React from "react";
import Pagination from "./pagination";


function SearchResults({ results }) {
    
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
        
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <Link href={result.link}>
              <a className="text-sm"></a>
            </Link>
            <Link href={result.link}>
              <a>
                <h2
                  className="truncate text-xl text-blue-600
                            group-hover:underline"
                >
                  {result.title}
                </h2>
              </a>
            </Link>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <Pagination />
    </div>
  );
}

export default SearchResults;
