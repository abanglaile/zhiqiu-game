import React from 'react'
import { connect } from 'react-redux'
import QueueAnim from 'rc-queue-anim'

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
      <QueueAnim type="right">
        <div className="bone-sub" key="bonesub">
          <div className="module">
            {this.props.children}
          </div>
        </div>
      </QueueAnim>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    onClick: () => {
    }
  })
)(Template)
