import React from 'react'
import { useContext } from 'react';
import { SortContext } from './context/SortContext';
import { isDesc } from '../../Helpers/IsDesc';
import Tag from '../UI/Tag';
import Chevron from '../UI/Chevron'
import styles from './styles.module.scss'
import Sorter from '../UI/Sorter';

export default function HeaderCellItem(props) {
  const {children,
        chevronExists=false, 
        sortExists=false, 
        tagExists=false, 
        headerCell=null, 
        value, 
        selectRender, 
        selectHandler=() =>{},
  } = props
  const {onSort} = useContext(SortContext)

  return (
    <th scope="col">
        <div className="tableHeaders">
          {chevronExists && 
               <Chevron 
                onClick={selectHandler} 
                className={styles.chevron}
               />
          }
          {(selectRender) && selectRender()}
          {tagExists && <Tag>{tagExists}</Tag>}
          <span>{children}</span>
          {sortExists && 
                <Sorter
                      desc={isDesc(headerCell,value) === true}
                      asc={isDesc(headerCell,value) === false} 
                      className={styles.sorter} 
                      onClick={onSort({field: value})}
                />
          }
        </div>
    </th>
  )
}
