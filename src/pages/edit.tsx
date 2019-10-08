import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Button, Input, Spin, Icon, message } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

interface IProps {
}

interface IState {
  editorState: any,
  outputHTML: any,
  isLivinig: boolean,
  title: String,
  describe: String,
  load: Boolean
}

class Edit extends React.Component<IProps, IState> {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    isLivinig: true,
    title: '',
    describe: '',
    load: false
  }

  componentDidMount () {
    this.setState({
      isLivinig: true
    })
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000)
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

  public setEditorContentAsync = () => {
    this.state.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
    })
  }

  public upData = () => {
    this.setState({
      load: true
    })
    fetch('https://www.canonhu.top/save', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        title: this.state.title,
        describe: this.state.describe,
        author: 'hujianeng',
        html: this.state.outputHTML
      }), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'include', // include, same-origin, *omit
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
        // 'sec-fetch-mode': 'cors'
      },
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        load: false
      })
      message.success('This is a success message');
      console.log(1113, res);
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

  public render () {

    const { editorState, outputHTML } = this.state

    return (
      <div>
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

export default Edit