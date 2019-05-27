import React from 'react'
import { connect } from 'react-redux'
import { demoAction } from '@/Action/index'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      icon: props.icon ? props.icon : 'icon-wodefangjian',
      title: props.title,
      description: props.description,
      admin: props.admin,
      quality: props.quality ? props.quality : 'white',
      number: props.number,
      max: props.max ? props.max : 50
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className={`card ${this.state.quality}`}>
        <div className="header">
          <i className={`iconfont ${this.state.icon}`}></i>
          <span className="title">
            {this.state.title}
          </span>
          <span className="percent">{this.state.number} / {this.state.max}</span>
        </div>
        <div className="content">
          <div className="description">{this.state.description}</div>
        </div>
        <div className="footer">
          <i className="iconfont icon-user"></i>
          {this.state.admin}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    prop: state.demoReducer.toJS().json.prop
  }),
  (dispatch) => ({
    onClick: () => {
      dispatch(demoAction({ prop: 'kiiil' }))
    }
  })
)(Card)
