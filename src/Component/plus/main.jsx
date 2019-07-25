import React from 'react'
import { connect } from 'react-redux'
import { demoAction } from '@/Action/index'

import Title from '@/Component/foundation/title'

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      prop: 1
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div>
        <Title title="目标" subtitle></Title>
        <div>
          Origin React Component
          <button>Method Action</button>
          {this.state.prop}
        </div>
        <div>
          Redux React Component
          <button>Redux Action</button>
          <div>{this.state.prop}</div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(Template)
