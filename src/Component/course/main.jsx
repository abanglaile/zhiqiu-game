import React from 'react'
import { connect } from 'react-redux'
import { demoAction } from '@/Action/index'

class Course extends React.Component {
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
      <div>
        本页面选择副本和任务
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
)(Course)
