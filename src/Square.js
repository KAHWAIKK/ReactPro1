import React from 'react'

const Square = ({colorValue,hexVlaue,isDarkText}) => {
  return (
    <section
            className ="square"
            style = {{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#fff"
                }}
    >
        <p>{colorValue ? colorValue : "Empty Choice"}</p>
        <p>{hexVlaue ? hexVlaue : null}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: "Empty Choice" 
}

export default Square