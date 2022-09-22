import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import TokenTable from './Components/TokenTable/TokenTable'
import './Global.scss'
import { sortItems } from './Helpers/sort'
import {Routes, Route} from 'react-router-dom'
import ProductPage from './Components/ProductPage'

const filtration = (object, items) =>{
    const test = (Object.keys(object))
    let result = [...items];
    const filtered = result.filter(e => {
        let status = true;
        for (let i=0; i<test.length; i++){
            const debug2 = object[test[i]];
            if (debug2 === null) continue;
        
            const debug = (e[test[i]] === object[test[i]])
            if (debug === false) {
                status = false
                break
            } 
        }
        return status
    })
    return filtered
}

export default function App() {
  const items = useSelector(state => state.projects)
  const filters = useSelector(state => state.filters)
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
      <Routes>
          <Route path='/' 
            element={ <TokenTable  
              items={filterItems(sortItems(items,sortField))}
              onSort={onSort}
              filters={filters}
              onFilter={filterItems}
              headerCell={sortField}
              onBuy={(elem) => alert(`Id покупаемого проекта - ${elem.id}`)}
          />}>
          </Route>
          <Route path='/product/:id' element={<ProductPage/>}></Route>
      </Routes>
    </>
  )
}
