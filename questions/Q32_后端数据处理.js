var parseData = ({ rows, metaData }) => {
  let titles = metaData.map(({ name }) => name)
  return rows.map(row => {
    let obj = {}
    titles.forEach((title, index) => {
      obj[title] = row[index]
    })
    return obj
  })
}


// var data = {
//   rows: [
//     ["Lisa", 16, "Female", "2000-12-01"],
//     ["Bob", 22, "Male", "1996-01-21"]
//   ],
//   metaData: [
//     { name: "name", note: '' },
//     { name: "age", note: '' },
//     { name: "gender", note: '' },
//     { name: "birthday", note: '' }
//   ]
// }
// console.log( parseData( data ) )
