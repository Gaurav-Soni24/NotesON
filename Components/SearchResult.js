import Link from 'next/link'
import React from 'react'
import './Style/SearchResult.css'

const SearchResult = ({text,link,title,category}) => {
  return (
    <div className='resultCard'>
      <h1>{title}</h1>
      <div className='category'>
        Category : {category}
      </div>
      <Link href={link}>View</Link>
    </div>
  )
}

export default SearchResult
