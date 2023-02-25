export const camelise = (obj) => {
    let newObj = {}
    
    for (const [key, value] of Object.entries(obj)) {
      let newKey = key
      let newValue = value
      
      if (key.includes('_')) {
        const split = key.split('_')
        newKey = split[0]
        for (let i = 1; i < split.length; i++) {
          newKey += split[i].charAt(0).toUpperCase() + split[i].slice(1)
        }
      }
      
      if (value && typeof value == "object" && !Array.isArray(value)) {
        console.log(value)
        newValue = camelise(value)
        console.log(newValue)
      }
      
      newObj[newKey] = newValue
    }
    return newObj
  }