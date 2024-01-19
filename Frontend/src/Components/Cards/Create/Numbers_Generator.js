 
 export const create_numeric_options = (min, max) => {
    const elements = [];
    for (let i = min; i <= max; i++) {
      elements.push(<option value={i}>{i}</option>)

    }
    return elements
  }