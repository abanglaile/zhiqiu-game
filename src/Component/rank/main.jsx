import React from 'react'
import { connect } from 'react-redux'
import Title from '@/Component/foundation/title'
import { demoAction } from '@/Action/index'

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

  method = () => {
    this.setState({ prop: 2 })
  }

  render () {
    return (
      <div>
        <Title title="学士走廊"></Title>
        <div>
          Origin React Component
          <button onClick = {this.method}>Method Action</button>
          {this.state.prop}
        </div>
        <div>
          Redux React Component
          <button onClick = {this.props.onClick}>Redux Action</button>
          <div>{this.props.prop}</div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    prop: state.gameData.toJS().json.prop
  }),
  (dispatch) => ({
    onClick: () => {
      dispatch(demoAction({ prop: 'kiiil' }))
    }
  })
)(Template)
