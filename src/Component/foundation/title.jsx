import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { NavBar, Icon } from 'antd-mobile'

let bone = process.bone_url
let bonesub = process.bone_sub_url

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
      <NavBar
        mode="light"
        icon={
          <i
            className={`iconfont ${this.props.subtitle ? 'icon-left' : 'icon-home'}`}
            style={{ 'fontSize': '20px' }}
            onClick={() => {
              if (this.props.subtitle) {
                browserHistory.goBack()
              } else {
                browserHistory.push(bone)
              }
            }}
          />
        }
        rightContent={[
          // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          // <Icon key="1" type="ellipsis" />
        ]}
      >{this.props.title}</NavBar>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(Title)
