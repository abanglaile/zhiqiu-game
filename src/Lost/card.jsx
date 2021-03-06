import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'antd-mobile'
import * as action from '@/Action/room'

const alert = Modal.alert

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      icon: props.icon ? props.icon : 'icon-wodefangjian',
      title: props.title,
      description: props.description,
      admin: props.admin,
      number: props.number,
      max: props.max ? props.max : 50
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  showAlert = () => {
    const alertInstance = alert(`${this.state.title}`, '即将进入，开启学习远征，确认？', [
      { text: 'Cancel', style: 'default', onPress: () => console.log('cancel') },
      {
        text: 'OK',
        onPress: () => {
          // console.log(this.props)
          let info = {
            date: new Date().toLocaleDateString(),
            name: this.props.title,
            id: 'test_room_id'
          }
          this.props.apiEnterRoom(info, this.props.redirect)
        }
      }
    ])
    // setTimeout(() => {
    //   // 可以调用close方法以在外部close
    //   console.log('auto close');
    //   alertInstance.close();
    // }, 500000);
  }

  render () {
    return (
      <div className="card">
        <div className="header">
          <i className={`iconfont ${this.state.icon}`}></i>
          <span className="title">
            {this.state.title}
          </span>
          <span className="right">{this.state.number} / {this.state.max}</span>
        </div>
        <div className="content">
          <div className="description">{this.state.description}</div>
        </div>
        <div className="footer">
          <i className="iconfont icon-user"></i>
          <span>{this.state.admin}</span>
          <div className="right">
            <Button
              inline
              type="primary"
              size="small"
              style={{ float: 'right', height: '100%', fontSize: '1.2em', lineHeight: '25px' }}
              onClick={this.showAlert}>
              Enter
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
  }),
  action
)(Card)
