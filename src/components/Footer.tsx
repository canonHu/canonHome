import React from 'react'
import FilterLink from '../store/containers/FilterLink'
import { VisibilityFilters } from '../store/actions'
import Test from '../store/containers/Test'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <Test></Test>
  </div>
)

export default Footer