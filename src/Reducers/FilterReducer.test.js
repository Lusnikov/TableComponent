import {  clearFilters, clearStatus, clearType, FilterReducer, updateStatus, updateType } from "./FiltersReducer";

test('test', () =>{
    const initialState= {
        status: null, 
        type: null
    }
    expect(FilterReducer(initialState, {type: ''})).toStrictEqual(initialState)
})

// type: UPDATE_STATUS

test('Обновление поля "статус"', () =>{
    const initialState= {
        status: null, 
        type: null
    }
    expect(FilterReducer(initialState, updateStatus('New Status'))).toStrictEqual({ status: 'New Status', type: null})
    expect(FilterReducer(initialState, updateStatus(undefined))).toStrictEqual({ status: null, type: null})
})

// type : UPDATE_TYPE

test('Обновление фильтра "type"', () =>{
    const initialState= {
        status: null, 
        type: null
    }
    const  reducerResult  = FilterReducer(initialState, updateType('newType'))
    expect(reducerResult).toStrictEqual( {
        status: null, 
        type: 'newType'
    })
    expect(reducerResult.status).toBe(null)
})

// TYPE: CLEAR_STATUS

test(('Очищение статуса'), ()=>{
    const initialState= {
        status: 'testStatus', 
        type: null
    }
    const reducerResult = FilterReducer(initialState, clearStatus())
    expect(reducerResult).toStrictEqual({
        status: null, 
        type: null
    })
})

test(('Очищение типа'), ()=>{
    const initialState= {
        status: null, 
        type: 'testType'
    }
    const reducerResult = FilterReducer(initialState, clearType())
    expect(reducerResult).toStrictEqual({
        status: null, 
        type: null
    })
})

// TYPE: CLEAR_FILTERS

describe(('Очищение фильтров'), ()=>{
        test('test 1', () =>{
            const initialState= {
                status: 'testStatus', 
                type: 'testType'
            }
            const reducerResult = FilterReducer(initialState, clearFilters())
            expect(reducerResult).toStrictEqual({
                status: null, 
                type: null
            })
        })
        test('test 2', () =>{
            const initialState= {
                status: 'testStatus', 
                type: null
            }
            const reducerResult = FilterReducer(initialState, clearFilters())
            expect(reducerResult).toStrictEqual({
                status: null, 
                type: null
            })
        })
})