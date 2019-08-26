import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

interface IProps {
}

interface IState {
  editorState: any,
  outputHTML: any,
  isLivinig: boolean
}

class Edit extends React.Component<IProps, IState> {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    isLivinig: true
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

  handleChange = (editorState:any) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.state.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
    })
  }

  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div>
      </div>
    )

  }

}

export default Edit