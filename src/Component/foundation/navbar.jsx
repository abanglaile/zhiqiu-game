import React from 'react'
import { connect } from 'react-redux'
import { List, InputItem, WhiteSpace } from 'antd-mobile'
import { demoAction } from '@/Action/index'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      prop: 1
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  method = () => {
    this.setState({ prop: 2 })
  }

  render () {
    return (
      <div className="navbar">
        <i className='iconfont icon-wodefangjian'></i>
        <i className='iconfont icon-ziyuan'></i>
        <i className='iconfont icon-purse'></i>
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
)(Navbar)
