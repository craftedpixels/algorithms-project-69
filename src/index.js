const search = (arr, str) => {
  const result = []
  arr.map(el => {
    if(el.text.indexOf(str) !== -1) result.push(el.id)
  })
return result
}

export default search