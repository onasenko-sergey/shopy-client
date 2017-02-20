import React from 'react'
import './<%= pascalEntityName %>.scss'

const propTypes = {
}

export const <%= pascalEntityName %> = () => (
  <div className='<%= dashesEntityName %>'>
    <h4><%= pascalEntityName %></h4>
  </div>
)

<%= pascalEntityName %>.propTypes = propTypes

export default <%= pascalEntityName %>
