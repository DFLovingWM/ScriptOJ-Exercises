var getPages = (total, itemsPerPage) => {
  if (itemsPerPage === 0) return 0
  let pageNum = Math.floor(total / itemsPerPage)
  if (total % itemsPerPage === 0) {
    return pageNum
  } else {
    return pageNum + 1
  }
}
