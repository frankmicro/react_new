export function filterArray(array, id) {
    return array.filter((res) => {
        return res.id === id;
      });
}

export function lengthArray(array) {
  return array.length
}

export function indexOfArray(array, id) {
  return array.map((res) => {
    return res.id === id
  })
}

export function mapArray(array, quantity) {
  return array.map((res) => ({
    ...res,total: res.price["USD"] * quantity + parseFloat(res.total),
        totalQuantity: res.totalQuantity + quantity,
  }))
}