import React, { useState } from 'react'
import TokenTable from './Components/TokenTable/TokenTable'
import './Global.scss'
import { sortItems } from './Helpers/sort'
import ProductPage from './Components/ProductPage'
import { filtration } from './Helpers/Filtration'


export default function App({items=[], filters, onFilter,onBuy}) {
  const [sortField, setSortField] = useState(null)
  

  const onSort = ({field}) =>{
    return () =>{
        if (field === undefined){
            setSortField(null) 
            return ;
        }
        if (sortField === null){
            setSortField(`-${field}`)
            return
        }
        if (sortField.includes('-') && sortField.replace('-', '') === field){
            setSortField(sortField.replace('-', ''))
            return 
        }
        setSortField(`-${field}`)
    }
   
  }

  const filterItems = (items) =>{
    return filtration(filters, items)
  }

  return (
    <>
      <TokenTable  
              items={filterItems(sortItems(items,sortField))}
              onSort={onSort}
              filters={filters}
              onFilter={onFilter}
              headerCell={sortField}
              onBuy={onBuy}
      />
    </>
  )
}
