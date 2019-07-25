import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { NavBar, Icon } from 'antd-mobile'
import config from '@/utils/Config'

let bone = config.bone_url
let bonesub = config.bone_sub_url

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
        icon={<Icon type="left" />}
        icon={
          <i
            className={`iconfont ${this.props.subtitle ? 'icon-left' : 'icon-home'}`}
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
