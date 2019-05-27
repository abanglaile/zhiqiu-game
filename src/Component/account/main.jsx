import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, List, Badge, Tabs, WhiteSpace } from 'antd-mobile'
import { demoAction } from '@/Action/index'

const Item = List.Item
const Brief = Item.Brief

const tabs = [
  { title: <Badge text={ '3' }>装备</Badge> },
  { title: <Badge dot>道具</Badge> }
]

class Template extends React.Component {
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
      <div className="account">
        <Card full>
          <div className="background">
            <div className="logo">
              <i className="iconfont icon-user"></i>
            </div>
            <div className="title">{this.props.nickname}</div>
          </div>
        </Card>
        <WhiteSpace></WhiteSpace>
        <List renderHeader={() => '学习情况'}>
          <Item
            extra="本周排名第2名"
            arrow="horizontal"
            thumb={<i className="iconfont icon-linechart"></i>}
            multipleLine
            onClick={() => {}}>
            学习时长 <Brief>3254小时</Brief>
          </Item>
          <Item
            extra="兑换玻璃球"
            arrow="horizontal"
            thumb={<i className="iconfont icon-gift"></i>}
            multipleLine
            onClick={() => {}}>
            玻璃球 <Brief>238</Brief>
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab) }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
        <WhiteSpace />
        <Button type="warning">退出登录</Button>
        <WhiteSpace />
      </div>
    )
  }
}
// <List renderHeader={() => '背包'}>
//   <Item
//     extra="装备"
//     arrow="horizontal"
//     multipleLine
//     onClick={() => {}}>
//     装备 <Brief>Equipments</Brief>
//   </Item>
//   <Item
//     extra="使用"
//     arrow="horizontal"
//     multipleLine
//     onClick={() => {}}>
//     道具 <Brief>Items</Brief>
//   </Item>
// </List>

export default connect(
  (state) => ({
    // prop: state.demoReducer.toJS().json.prop
    nickname: state.AuthData.get('nickname')
  }),
  (dispatch) => ({
    onClick: () => {
      // dispatch(demoAction({ prop: 'kiiil' }))
    }
  })
)(Template)
