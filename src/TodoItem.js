import React from 'react';

function RenderTodoItems({items, onClick, fuck}) {
  const itemsList = items.map((item, index) => {
    return (
      <li key={index} onClick={() => onClick(index)} dangerouslySetInnerHTML={{__html: item}}></li>
    )
  })

  return (
    <ul>
      {itemsList}
    </ul>
  )
}

export default RenderTodoItems;
