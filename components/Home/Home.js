import React, { useCallback, useState } from 'react'
import styles from './Home.module.css'
import { useDebounce } from 'use-debounce'
import Products from '../Products'

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)


  return (
    <div className={styles.home}>
      <Products search={debouncedSearchQuery} />
    </div>
  )
}
