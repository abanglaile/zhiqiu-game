import React from 'react'
import { connect } from 'react-redux'
import { List, InputItem, WhiteSpace } from 'antd-mobile'

class Title extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className="title-wrapper">
        <i className={`iconfont ${this.props.icon}`}></i>
        <span className="title">{this.props.title}</span>
      </div>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(Title)
