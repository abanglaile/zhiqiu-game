import React from 'react'
import { connect } from 'react-redux'

import Navbar from '@/Component/foundation/navbar'
import Tabbar from '@/Component/foundation/tabbar'

class Bone extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'dashboard',
      hidden: false
    }
  }

  render () {
    return (
      <div className="bone">
        <Navbar></Navbar>
        <div className="module">
          {this.props.children}
        </div>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(Bone)
