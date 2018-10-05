/**
 * 1、理解“组件树”的理念
 * 2、定义组件树的思维方式：(1)自顶向下；(2)自底向上
 */

let House = props => (
  <div className="house">
    <Room></Room>
    <Bathroom></Bathroom>
  </div>
)

let Room = props => (
  <div className="room">
    <Man></Man>
    <Dog></Dog>
    <Dog></Dog>
  </div>
)

let Bathroom = props => (<div className="bathroom"></div>)

let Man = props => (<div className="man"></div>)

let Dog = props => (<div className="dog"></div>)
