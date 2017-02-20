import React from 'react'
import './<%= pascalEntityName %>.scss'

const propTypes = {
}

export const <%= pascalEntityName %> = () => (
  <div className='<%= dashesEntityName %>'>
    <h3><%= pascalEntityName %></h3>
  </div>
)

<%= pascalEntityName %>.propTypes = propTypes

export default <%= pascalEntityName %>
