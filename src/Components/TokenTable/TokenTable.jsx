import React from 'react'
import { createContext } from 'react';
import { SortContext } from './context/SortContext';
import styles from './styles.module.scss'
import TableHead from './TableHead';
import TableLine from './TableLine';


export default function TokenTable(props) {
  const {
    items, 
    headerCell,
    filters, 
    onSort, 
    onFilter,
    onBuy = (item) => alert(item)
    
    } = props;

    const click = (item) => {
      return (e) =>{
        e.stopPropagation();
        onBuy(item)
      }
      
    }

   
  return (
    <SortContext.Provider value={{onSort}}>
      <div div className='container'>
        <table rules='none'  className={styles.table}>
          <TableHead headerCell={headerCell}  onSort={onSort} filters={filters}/>
          {onFilter(items).map(item =>   <TableLine onBuy={click} key={item.id} item={item} /> )}

        </table>
      </div>
    </SortContext.Provider>
   
  )
}
