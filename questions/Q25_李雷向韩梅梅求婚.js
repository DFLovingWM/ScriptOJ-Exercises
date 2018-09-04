exports.proposeToMissHan = (isOK) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isOK ? resolve('ok') : reject('no')
    }, 50)
  })
}
