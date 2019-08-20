import React from 'react'
import QueueAnim from 'rc-queue-anim'
import { browserHistory } from 'react-router'
import { List, Modal } from 'antd-mobile'
import { connect } from 'react-redux'

import * as action from '@/Action/room'

import Title from '@/Component/foundation/title'

const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert

class Room extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    if (this.props.isRoomSelected) {
      browserHistory.push(`${process.bone_sub_url}/room`)
    }
  }

  componentDidMount () {
    this.props.apiGetRoom()
  }

  componentWillUnmount () {}

  showAlert = (room, user_id) => {
    const alertInstance = alert(`${room.name}`, '即将进入，开启学习远征，确认？', [
      { text: 'Cancel', style: 'default', onPress: () => console.log('cancel') },
      {
        text: 'OK',
        onPress: () => {
          // console.log(this.props)
          let info = {
            date: new Date().toLocaleDateString(),
            name: room.name,
            id: room.id
          }
          this.props.apiEnterRoom(info, user_id, this.props.redirect)
        }
      }
    ])
  }

  Rooms () {
    return this.props.rooms.map((room) =>
      <Item
        key={room.id}
        arrow="horizontal"
        thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565019449002&di=ee51ec5c932980b96e0366d40f41c040&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ab7757a006170000018c1b6370e5.jpg%401280w_1l_2o_100sh.jpg"
        multipleLine
        onClick={() => { this.showAlert(room, this.props.user_id) }}
      >
        {room.name}
        <Brief>{room.description}</Brief>
      </Item>
    )
  }

  render () {
    return (
      <div className="room">
        <Title title="自习室"></Title>
        <List renderHeader={() => '欢迎来到知秋，选择今天的自习室'} className="my-list">
          <QueueAnim delay={150}>
            {this.Rooms()}
          </QueueAnim>
        </List>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    redirect: ownProps.location.query.redirect ? ownProps.location.query.redirect : '/zhiqiu-game',
    rooms: state.RoomData.toJS().rooms,
    user_id: state.AuthData.toJS().userid,
    isRoomSelected: state.RoomData.toJS().isRoomSelected
  }),
  action
)(Room)
