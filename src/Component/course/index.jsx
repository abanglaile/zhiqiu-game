import React from 'react'
import { connect } from 'react-redux'
import * as action from '@/Action/index'
import { Flex, List, Icon, Button, Tag, Tabs, SwipeAction } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

const tabs2 = [
  { title: '全部', sub: '1' },
  { title: '数学', sub: '2' },
  { title: '英语', sub: '3' },
  { title: '语文', sub: '4' },
  { title: '音乐', sub: '5' }
]

class Course extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      prop: 1
    }
  }

  componentWillMount () {}

  componentDidMount () {
    this.props.getStuOnlineTask(this.props.student_id)
  }

  componentWillUnmount () {}

  method = () => {
    this.setState({ prop: 2 })
  }

  renderTaskList1 () {
    let task_list = (this.props.online_task || []).map(item =>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' }
          },
          {
            text: '删除',
            onPress: () => this.props.deleteTaskLog(item.task_id, this.props.student_id),
            style: { backgroundColor: '#F4333C', color: 'white' }
          }
        ]}
      >
        <Item style={{ paddingLeft: '1.2rem' }} multipleLine onClick={() => {}}>
          <div style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1rem' }}>
            <span>{item.source_name}</span>
          </div>
          <div style={{ fontSize: '1rem' }}>
            {item.task_type ? item.remark : JSON.parse(item.remark).map((page, index, arr) => 'P' + page + ((index < arr.length - 1) ? '，' : ''))}
          </div>
          <Brief>
            <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
              <i className="iconfont icon-experiment" />
              <span style={{ marginLeft: '0.5rem' }}>× 600</span>
            </div>
          </Brief>
        </Item>
      </SwipeAction>
    )
    console.log(this.props.online_task)
    return (
      <List>
        {task_list}
      </List>
    )
  }

  renderTaskList () {
    let sourceList = [{}, {}]
    console.log(this.props.online_task)
    return (
      sourceList.map(item => {
        return (
          <List>
            {/* <Item style={{ fontWeight: 'bold' }}>五年高考三年模拟</Item> */}
            {/* <Item extra={<Button type="ghost" size="small" inline>领取</Button>} multipleLine onClick={() => {}}>
              <div style={{ letterSpacing: '0.1rem', marginBottom: '0.7rem', fontSize: '0.9rem' }}>
                <span>百词斩</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div>
                  <div style={{ marginBottom: '0.2rem', fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 1rem 0rem 0rem' }}>
                    <i className="iconfont icon-linechart" />
                    <span style={{ marginLeft: '0.5rem' }}>90 μL</span>
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: '0.8rem' }}>任务经验</div>
                </div>
                <div style={{ marginTop: '0.1rem', marginLeft: '1rem' }}>
                  <div style={{ marginBottom: '0.2rem', fontWeight: 'bold', fontSize: '1rem' }}>复习Unit 3单词</div>
                  <div style={{ fontSize: '0.9rem', color: '#8c8c8c' }}>
                    实际用时10分钟
                  </div>
                </div>
              </div>
            </Item> */}
            {/* <Item extra={'审核中'} multipleLine onClick={() => {}}>
              <div style={{ marginLeft: '0.2rem', marginBottom: '0.7rem', fontSize: '0.9rem' }}>
                <span>五年高考三年模拟</span>
              </div>
              <div style={{ marginLeft: '0.2rem', display: 'flex' }}>
                <div>
                  <div style={{ marginBottom: '0.2rem', fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 1rem 0rem 0rem' }}>
                    <i className="iconfont icon-linechart" />
                    <span style={{ marginLeft: '0.5rem' }}>300 μL</span>
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: '0.8rem' }}>任务经验</div>
                </div>
                <div style={{ marginTop: '0.2rem', marginLeft: '1rem' }}>
                  <div style={{ marginBottom: '0.2rem', fontWeight: 'bold', fontSize: '1rem' }}>P35，P36</div>
                  <div style={{ fontSize: '0.9rem', color: '#8c8c8c' }}>
                    预计用时21分钟
                  </div>
                </div>
              </div>
            </Item>
            <Item extra={
              <div>
                <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-linechart" />
                  <span style={{ marginLeft: '0.5rem' }}>600 μL</span>
                </div>
                <div style={{ color: '#8c8c8c', fontSize: '0.8rem' }}>任务经验</div>
              </div>
            } multipleLine onClick={() => {}}>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ marginBottom: '0.2rem', fontWeight: 'bold', fontSize: '1rem' }}>英语周报</div>
                  <div style={{ fontSize: '0.9rem', color: '#8c8c8c' }}>
                    九年级第356期 P1,P2
                  </div>
                </div>
              </div>
            </Item>
            <Item extra={
              <div>
                <div style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-linechart" />
                  <span style={{ marginLeft: '0.5rem' }}>600 μL</span>
                </div>
                <div style={{ color: '#8c8c8c', fontSize: '0.8rem' }}>任务经验</div>
              </div>
            } multipleLine onClick={() => {}}>
              <div style={{ marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>英语周报</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ marginBottom: '0.2rem', fontWeight: 'bold', fontSize: '1rem' }}>九年级第356期 P1,P2</div>
                  <div style={{ fontSize: '0.9rem', color: '#8c8c8c' }}>
                    预计用时21分钟
                  </div>
                </div>
              </div>
            </Item>
            <Item extra={
              <Button type="primary" size="small">
                <div style={{ fontSize: '1rem', color: 'white', padding: '0rem 0rem 0rem 0rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>领取</span>
                  <i className="iconfont icon-experiment" />
                  <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>× 600</span>
                </div>
              </Button>
            } multipleLine onClick={() => {}}>
              <div style={{ marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>英语周报</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ marginBottom: '0.2rem', fontWeight: 'bold', fontSize: '1rem' }}>九年级第356期 P1P2</div>
                  <div style={{ fontSize: '0.9rem', color: '#8c8c8c' }}>
                    预计用时21分钟
                  </div>
                </div>
              </div>
            </Item>
            <Item extra={
              <div>
                <Button type="ghost" size="small" inline>领取奖励</Button>
              </div>
            } multipleLine onClick={() => {}}>
              <div style={{ marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>英语周报</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                    九年级第356期 P1，P2
                  </div>
                </div>
              </div>
              <Brief>
                <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-experiment" />
                  <span style={{ marginLeft: '0.5rem' }}>× 600</span>
                </div>
              </Brief>
            </Item> */}
            <Item style={{ paddingLeft: '1.2rem' }} multipleLine onClick={() => {}}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>哈利波特（英文）</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ fontSize: '1rem' }}>
                    第三章 猫头鹰传书
                  </div>
                </div>
              </div>
              <Brief>
                <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-experiment" />
                  <span style={{ marginLeft: '0.5rem' }}>× 600</span>
                </div>
              </Brief>
            </Item>
            <Item style={{ paddingLeft: '1.2rem' }} extra={
              <div>
                <Button type="primary" size="small" inline>领取奖励</Button>
              </div>
            } multipleLine onClick={() => {}}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>五年高考三年模拟</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ fontSize: '1rem' }}>
                    P35，P36
                  </div>
                </div>
              </div>
              <Brief>
                <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-experiment" />
                  <span style={{ marginLeft: '0.5rem' }}>× 600</span>
                </div>
              </Brief>
            </Item>
            <Item extra={
              <div style={{ border: '1px solid #108ee9', fontSize: '0.9rem', float: 'right', textAlign: 'center', color: '#108ee9', width: '4rem' }}>
                审核中
              </div>
            } multipleLine onClick={() => {}}>
              <div style={{ marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>英语周报</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                    高二上学期第356期 P1-P3
                  </div>
                </div>
              </div>
              <Brief>
                <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-experiment" />
                  <span style={{ marginLeft: '0.5rem' }}>× 600</span>
                </div>
              </Brief>
            </Item>
            <Item extra={
              <div style={{ border: '1px solid #108ee9', fontSize: '0.9rem', float: 'right', textAlign: 'center', color: '#108ee9', width: '4rem' }}>
                审核中
              </div>
            } multipleLine onClick={() => {}}>
              <div style={{ marginBottom: '0.7rem', fontSize: '1rem' }}>
                <span>英语周报</span>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                    高二上学期第356期 P1-P3
                  </div>
                </div>
              </div>
              <Brief>
                <div style={{ fontSize: '1.1rem', color: '#ad4e00', fontWeight: 'bold', padding: '0rem 0rem 0rem 0rem' }}>
                  <i className="iconfont icon-experiment" />
                  <span style={{ marginLeft: '0.5rem' }}>× 600</span>
                </div>
              </Brief>
            </Item>
          </List>
        )
      })
    )
  }

  render () {
    return (
      <div>
        <div style={{ height: '8rem', paddingTop: '2rem', backgroundColor: '#fafafa' }}>
          {/* <div style={{ textAlign: 'right' }} >
            <span style={{ fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#e8e8e8', padding: '0.5rem 1rem 0.5rem 1rem' }}>喜悦研修室 ↗</span>
          </div> */}
          <div>
            <div style={{ letterSpacing: '0.1rem', marginTop: '1rem', marginLeft: '1rem' }}>累计本周墨水 ></div>
            <div style={{ marginLeft: '1rem', color: '#ad4e00', marginTop: '0.5rem', fontWeight: 'bold', borderRadius: '5px' }}>
              <span style={{ fontSize: '2.3rem' }}>98.82</span>
              <span style={{ fontSize: '1.5rem', marginLeft: '0.2rem' }}>mL</span>
            </div>
            <div style={{ marginTop: '0rem', fontWeight: 'bold', color: '#ad4e00', fontSize: '0.8rem', width: '6rem', padding: '0.5rem 0rem 0.5rem 1rem' }}>
              <span>永恒钻石 Ⅲ</span>
            </div>
          </div>
        </div>
        <List>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            extra='35人'
          >
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>喜悦自习室</span>
          </Item>
        </List>
        <Tabs swipeable={false} tabs={tabs2}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab) }}
        >
          {this.renderTaskList1()}
          {this.renderTaskList()}
        </Tabs>
      </div>
    )
  }
}

export default connect(state => {
  const gameData = state.gameData.toJS()
  const { online_task } = gameData
  return {
    online_task: online_task,
    student_id: '543cb8f0554911e9845073e9da5c870d'
  }
}, action)(Course)
