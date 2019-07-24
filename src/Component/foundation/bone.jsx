import React from 'react'
import { connect } from 'react-redux'

import Tabbar from '@/Component/foundation/tabbar'

class Bone extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // console.log(this.props.router)
  }
  componentWillUpdate (nextProps, nextState) {
    // console.log(this.props.pathname)
  }

  render () {
    return (
      <div className="bone">
        <div className="module">
          {this.props.children}
        </div>
        <Tabbar pathname={ this.props.pathname }></Tabbar>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    pathname: ownProps.location.pathname
  }),
  (dispatch) => ({
  })
)(Bone)
