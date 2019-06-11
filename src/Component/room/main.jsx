import React from 'react'
import { connect } from 'react-redux'
import { demoAction } from '@/Action/index'

import Title from '@/Component/foundation/title'
import Card from '@/Component/room/card'

class Room extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className="room">
        <Title title="签约自习室" icon="icon-team1"></Title>
        <Card
          title="五三讨伐大厅"
          description="为了讨伐‘五三’的冒险者们自发建立的大厅...."
          admin="知秋教育动物园分店"
          number="26">
        </Card>
        <Card
          title="音律练功房"
          description="因为练歌被邻居投诉而一怒之下创建而来...."
          admin="星海学院"
          number="12">
        </Card>
        <Card
          title="独木桥"
          description="据说每年都会有千军万马卡在这座桥上...."
          admin="知秋教育总店"
          number="45">
        </Card>
        <Card
          title="独木桥2"
          description="据说每年都会有千军万马卡在这座桥上...."
          admin="知秋教育总店"
          number="9">
        </Card>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    prop: state.demoReducer.toJS().json.prop
  }),
  (dispatch) => ({
    onClick: () => {
      dispatch(demoAction({ prop: 'kiiil' }))
    }
  })
)(Room)
