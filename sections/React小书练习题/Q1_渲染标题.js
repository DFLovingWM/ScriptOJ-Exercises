/**
 * React基础：
 * 理解ReactDOM.render做了什么
 */

let App = ({ content }) => (<h1>{ content }</h1>)

function renderContent (content) {
  ReactDOM.render(
    <App content={content} />,
    document.getElementById('root')
  )
}
