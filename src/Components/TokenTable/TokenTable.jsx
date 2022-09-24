import React from 'react'

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
    onFilter=(props) => console.log(props),
    onBuy = (item) => alert(item)
    } = props;

    const click = (item) => {
      return (e) =>{
        e.stopPropagation();
        onBuy(item)
      }
    }
    const lines = items;

  return (
    <SortContext.Provider value={{onSort}}>
      <div div className='container'>
        <table rules='none'  className={styles.table}>
          <TableHead headerCell={headerCell} onSort={onSort} filters={filters} onFilter={onFilter}/>
          
          {
            !lines.length && <div>Элементы с заданными параметрами отсутствуют</div>
          }
          
          {
          lines.map(item => <TableLine 
                          onBuy={click} 
                          key={item.id} 
                          item={item} 
                        /> 
          )}
        </table>
      </div>
    </SortContext.Provider>
   
  )
}
