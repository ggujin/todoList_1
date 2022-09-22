import React from 'react'

export function TodoFilter({ onFilterChange }) {
  return(
    <div>
      <button type="button" onClick={() => onFilterChange('ALL')}>ALL</button>
      <button type="button" onClick={() => onFilterChange('ACTIVE')}>Active</button>
      <button type="button" onClick={() => onFilterChange('COMPLETED')}>Completed</button>
    </div>
  )
}