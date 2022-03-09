export function createIdForArrayElements(array) {
    array.forEach((e) => {
        e.id = array.indexOf(e)
      })
  }