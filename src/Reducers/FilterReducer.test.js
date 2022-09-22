import { clearType, FilterReducer, updateStatus } from "./FiltersReducer";


test('test', () =>{
    const initialState= {
        status: null, 
        type: null
    }
    expect(FilterReducer(initialState, {type: ''})).toStrictEqual(initialState)
})

test('Обновление поля "статус"', () =>{
    const initialState= {
        status: null, 
        type: null
    }
    expect(FilterReducer(initialState, updateStatus('New Status'))).toStrictEqual({ status: 'New Status', type: null})
    expect(FilterReducer(initialState, updateStatus(undefined))).toStrictEqual({ status: null, type: null})
})