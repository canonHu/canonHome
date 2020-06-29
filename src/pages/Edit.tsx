import React from 'react'
import 'braft-editor/dist/index.css'
import { connect } from 'react-redux'
import BraftEditor from 'braft-editor'
import request from '../utils/request'
import { Button, Input, Spin, Icon, message, Radio } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

interface IProps {
  id: number,
  destroyTodo: any
}

interface IState {
  editorState: any,
  outputHTML: any,
  isLivinig: boolean,
  title: String,
  describe: String,
  load: Boolean,
  id: number,
  type: number,
  list: Array<{
    type: string,
    name: string
  }>
}

class Edit extends React.Component<IProps, IState> {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    isLivinig: true,
    title: '',
    describe: '',
    load: false,
    id: this.props.id,
    type: 0,
    list: [
      {
        type: '0',
        name: '平时杂记'
      },
      {
        type: '1',
        name: 'LeetCode练习题'
      },
      {
        type: '2',
        name: '数据结构'
      },
      {
        type: '3',
        name: '小程序'
      },
      {
        type: '4',
        name: 'Threejs'
      },
      {
        type: '5',
        name: '数据统计'
      },
    ]
  }

  componentDidMount () {
    // request('delete', '', 'get', 'fetch')
    this.setState({
      isLivinig: true
    })
    // 3秒后更改编辑器内容
    // setTimeout(this.setEditorContentAsync, 3000)
  }

  componentWillUnmount () {
    this.setState({
      isLivinig: false
    })
  }

  public handleChange = (editorState:any) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  // public setEditorContentAsync = () => {
  //   this.state.isLivinig && this.setState({
  //     editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
  //   })
  // }

  public upData = () => {
    this.setState({
      load: true
    })
    request('save', {
      id: this.state.id,
      author: 'hujianeng',
      type: this.state.type,
      title: this.state.title,
      describe: this.state.describe,
      html: this.state.outputHTML
    }, 'POST', 'fetch')
      .then(res => {
        this.props.destroyTodo(this.state.id + 1)
        this.setState({
          load: false
        })
        message.success('保存成功');
      })
  }

  public upDataFun = (e:any) => {
    switch (e.target.id) {
      case 'title':
        this.setState({
          title: e.target.value
        })
        break;
        
      case 'describe':
        this.setState({
          describe: e.target.value
        })
        break;
    }
    
  }

  /**
   * @description 选择type
   * 
   */

  public change:any = (e: any) => {
    this.setState({
      type: parseInt(e.target.value, 10)
    })
  }

  public render () {
    const { editorState, /* outputHTML */ } = this.state

    return (
      <div>
        <div>
          <Radio.Group defaultValue="0" onChange={this.change} buttonStyle="solid">
            {this.state.list.map(i => {
              return <Radio.Button
                key={i.type}
                value={i.type}
              >{i.name}</Radio.Button>
            })}
          </Radio.Group>
        </div>
        <Spin spinning={this.state.load} indicator={antIcon}>
          <Input
            id="title"
            placeholder="title"
            onChange={this.upDataFun}
          />
          <Input
            id="describe"
            placeholder="describe"
            onChange={this.upDataFun}
          />
          <div className="editor-wrapper">
            <BraftEditor
              value={editorState}
              onChange={this.handleChange}
            />
          </div>
          {/* <h5>输出内容</h5>
          <div className="output-content">{outputHTML}</div> */}
          <Button onClick={this.upData} type="primary">提交</Button>
        </Spin>
      </div>
    )

  }

}

const mapStateToProps = (data: any) => {
  return{
    id: data.edit.id
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    destroyTodo : (id: number) => dispatch({
      type : 'ADD_ID',
      id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
