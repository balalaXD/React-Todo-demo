import React from 'react';
import propTypes from 'prop-types';

function RenderTodoItems({items, onClick}) {
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

RenderTodoItems.propTypes = {
  items: propTypes.array.isRequired,
  onClick: propTypes.func.isRequired
}

// When you not provide some props to the component, the default take effect
// For more detail, visit https://reactjs.org/docs/typechecking-with-proptypes.html
RenderTodoItems.defaultProps = {
  items: ['Wake up at 5:30', 'Working hard until 7:00pm', 'Go to study']
}

export default RenderTodoItems;
