import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'
import Title from '@/Component/foundation/title'
import * as action from '@/Action/room'

const active = {
  top: '10px',
  bottom: '10px',
  left: '10px',
  right: '10px'
}
const disable = {
  opacity: '0'
}

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        close: { opacity: '0' },
        blackboard: {},
        table: {},
        nameboard: {},
        postboard: {}
      }
    }
  }

  active = (board) => {
    this.setState({
      style: {
        close: {},
        blackboard: board === 'blackboard' ? active : disable,
        table: board === 'table' ? active : disable,
        nameboard: board === 'nameboard' ? active : disable,
        postboard: board === 'postboard' ? active : disable
      }
    })
  }

  close = () => {
    this.setState({
      style: {
        close: { opacity: '0' },
        blackboard: {},
        table: {},
        nameboard: {},
        postboard: {}
      }
    })
  }

  componentWillMount () {
    this.props.apiGetRoomByID(this.props.room_id)
  }

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div style={{ height: '100%' }}>
        <Title title="自习室"></Title>
        <div className="classroom">
          <i className="close iconfont icon-fullscreen-exit" style={this.state.style.close} onClick={this.close}></i>
          <div className="blackboard" style={this.state.style.blackboard} onClick={this.active.bind(this, 'blackboard')}>
            <div className="title">{this.props.room.name}</div>
            <div className="description">{this.props.room.description}</div>
            <div className="footer">
              <div className="admin">
                <Avatar shape="square" src={this.props.room.admin.avatar} />
                <span>[管理员]{this.props.room.admin.nickname}</span>
              </div>
              <div className="buff">
                <i className="iconfont icon-chemicalglass"></i>
                <i className="iconfont icon-shengji"></i>
              </div>
            </div>
          </div>
          <div className="table" style={this.state.style.table}>
            <div className="circle" onClick={this.active.bind(this, 'table')}>
              <span>开始学习</span>
            </div>
          </div>
          <div className="nameboard" style={this.state.style.nameboard} onClick={this.active.bind(this, 'nameboard')}>
            <div className="number">45</div>
            <div>
              <i className="iconfont icon-team"></i>
              <span>成员</span>
            </div>
          </div>
          <div className="postboard" style={this.state.style.postboard} onClick={this.active.bind(this, 'postboard')}>
            <div className="number">165</div>
            <div>
              <i className="iconfont icon-file-copy"></i>
              <span>留言</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    room_id: state.RoomData.toJS().room_id,
    room: state.RoomData.toJS().room
  }),
  action
)(Template)
