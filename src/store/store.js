import {combineReducers, createStore} from 'redux'
import { FilterReducer } from '../Reducers/FiltersReducer'
import { ProjectsReducer } from '../Reducers/ProjectReducer'

const store = createStore(combineReducers({
    projects: ProjectsReducer,
    filters: FilterReducer,
}))

export default store