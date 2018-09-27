class CatList extends React.Component {
  render () {
    const catList = this.props.cats.sort(({ weight: w1 }, { weight: w2 }) => {
      return w1 < w2 ? -1 : w1 > w2 ? 1 : 0
    }).map(cat => (
      <div class='cat'>
        <span class='cat-name'>{ cat.name }</span>
        <span class='cat-weight'>{ cat.weight }</span>
      </div>
    ))
    return (
      <div id="cat-list">
        { catList }
      </div>
    )
  }
}

function renderFatCats (cats) {
  ReactDOM.render(<CatList cats={cats} />, document.getElementById('cats-list')) 
}
