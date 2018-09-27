const bindViewToData = (el, data) => {
  let tmpData = JSON.parse(JSON.stringify(data))

  for (const [key, value] of Object.entries(data)) {
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get () {
        return tmpData[key]
      },
      set (newValue) {
        if (newValue !== tmpData[key]) {
          updateDOM()
          tmpData[key] = newValue
        }
      }
    })
  }
}

function updateDOM(el, data) {
  with (data) {
    el.innerHTML = el.innerHTML.replace(/\{\{(\S+)\}\}/g, '$1')
  }
}