import React from 'react'
import { colors, colorsList } from '../../Helpers/Colors';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFilters, clearStatus, clearType, updateStatus, updateType } from '../../Reducers/FiltersReducer';
import { tokenTypes } from '../../Helpers/TokensTypes';
import styles from './styles.module.scss'
import HeaderCellItem from './HeaderCellItem';
import Circle from '../UI/Circle'
import Select from 'react-select';

export default function TableHead({headerCell,onSort,filters}) {
  const [activeSelectId, setActiveSelectId] = useState(null)
  const dispatch = useDispatch()

  const selectHandler = (value) => () => setActiveSelectId((prev) => {
    if (!prev)  return value
    if (prev === value) return null
    return value
  })

  return (
    <thead align="justify">
    <tr>
      <HeaderCellItem 
        chevronExists 
        sortExists 
        tagExists={filters.status === null ? 'All' :  colors[filters.status].status}
        headerCell={headerCell} 
        value='name' 
        onSort={onSort} 
        selectRender={() =>  {
          if (activeSelectId === 1 ){
            return( 
               <div className={styles.cellSelect} >
                 <Select 
                    options={colorsList}
                    formatOptionLabel={
                        element => 
                            <div className={styles.selectOption}>
                              <Circle color={element.value}/> <span>{element.status}</span>
                            </div>
                    }
                    filterOption={false}
                    placeholder={'Выберите статус'}
                    isClearable
                    defaultInputValue={colors[filters.status]?.status}
                    onChange={(e,triggeredAction) =>{
                      if (triggeredAction.action === 'clear'){
                        dispatch(clearStatus())
                        selectHandler(null)()
                        return
                      }
                      console.log(filters);
                      dispatch(updateStatus(e.name))
                    }}
                    
                 />
                </div>
            )}
        }}
        selectHandler={selectHandler(1)}
      >
        Projects
      </HeaderCellItem>
      <HeaderCellItem 
          chevronExists 
          tagExists={filters.type === null ? 'All' : tokenTypes.filter(e => filters.type === e.name)[0]['name']} 
          selectId={2}  
          selectRender={() =>  {
            if (activeSelectId === 2 ){
              return( 
                <div className={styles.cellSelect} >
                  <Select 
                      placeholder={'Выберите тип токена'} 
                      options={tokenTypes}
                      isSearchable={false}
                      formatOptionLabel={(type) => type.name}
                      getOptionValue={type => type.name }
                      isClearable
                      onChange={(e,triggeredAction) =>{
                        if (triggeredAction.action === 'clear'){
                          dispatch(clearType())
                          selectHandler(null)()
                          return
                        }
                        dispatch(updateType(e.name))
                      }}
                  />
                  </div>
              )}
          }}
        selectHandler={selectHandler(2)}>
        Token Type
      </HeaderCellItem>
      <HeaderCellItem chevronExists >
        Condition
      </HeaderCellItem>
      <HeaderCellItem sortExists headerCell={headerCell} value='volume'>
        Volume
      </HeaderCellItem>
      <HeaderCellItem >
        ROI
      </HeaderCellItem>
      <HeaderCellItem >
         Free Float
      </HeaderCellItem>
      <HeaderCellItem >
        Insurance hedge
      </HeaderCellItem>
      <HeaderCellItem >
        {headerCell !== null &&      <button onClick={onSort({field: undefined})}>Деактивировать сортировку</button>}
    
          <button  className={styles.clearFilters} onClick={() => dispatch(clearFilters())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 14.586l3.586-3.586 1.414 1.414-3.586 3.586 3.586 3.586-1.414 1.414-3.586-3.586-3.586 3.586-1.414-1.414 3.586-3.586-3.586-3.586 1.414-1.414 3.586 3.586zm-7 6.414h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z"/></svg>
         </button>
      </HeaderCellItem>
    </tr>
  </thead>
  )
}
