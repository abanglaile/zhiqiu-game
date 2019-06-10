import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Icon, TabBar } from 'antd-mobile'

class Tabbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
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
              this.setState({
                selectedTab: 'Quest'
              })
              browserHistory.push('/zhiqiu-game/')
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
              this.setState({
                selectedTab: 'Rank'
              })
              browserHistory.push('/zhiqiu-game/room')
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            title="-"
            key="nothing"
            icon={<i className="iconfont icon-course"></i>}
            selectedIcon={<i className="selected iconfont icon-course"></i>}
            selected={this.state.selectedTab === 'nothing'}
            onPress={() => { }}
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
              this.setState({
                selectedTab: 'Room'
              })
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
              this.setState({
                selectedTab: 'Account'
              })
              browserHistory.push('/zhiqiu-game/account')
            }}
            data-seed="logId"
          >
          </TabBar.Item>

        </TabBar>
        <div className="new-wrapper">
          <i className="iconfont icon-plus"></i>
        </div>
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
