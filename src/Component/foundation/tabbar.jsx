import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { TabBar } from 'antd-mobile'
import config from '@/utils/Config'

let bone = config.bone_url
let bonesub = config.bone_sub_url

class Tabbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  Tabbar (props) {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="RGBA(250, 250, 250, 1)"
        >
          <TabBar.Item
            title="Quest"
            key="Quest"
            icon={<i className="iconfont icon-file-exception"></i>}
            selectedIcon={<i className="selected iconfont icon-file-exception"></i>}
            selected={this.state.selectedTab === 'Quest'}
            onPress={() => {
              // this.setState({
              //   selectedTab: 'Quest'
              // })
              browserHistory.push(bone)
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            title="Rank"
            key="Rank"
            icon={<i className="iconfont icon-rank3"></i>}
            selectedIcon={<i className="selected iconfont icon-rank3"></i>}
            selected={this.state.selectedTab === 'Rank'}
            onPress={() => {
              browserHistory.push(`${bone}/room`)
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            title="Plus"
            key="Plus"
            icon={<i className="iconfont icon-plus"></i>}
            selectedIcon={<i className="selected iconfont icon-plus"></i>}
            selected={this.state.selectedTab === 'Plus'}
            onPress={() => {
              browserHistory.push(`${bonesub}/plus`)
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            title="Room"
            key="Room"
            icon={<i className="iconfont icon-team1"></i>}
            selectedIcon={<i className="selected iconfont icon-team1"></i>}
            selected={this.state.selectedTab === 'Room'}
            onPress={() => {
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            title="Account"
            key="Account"
            icon={<i className="iconfont icon-user"></i>}
            selectedIcon={<i className="selected iconfont icon-user"></i>}
            selected={this.state.selectedTab === 'Account'}
            onPress={() => {
              browserHistory.push(`${bone}/account`)
            }}
            data-seed="logId"
          >
          </TabBar.Item>

        </TabBar>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.Tabbar()}
      </div>
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
)(Tabbar)
