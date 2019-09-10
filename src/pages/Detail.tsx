import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

interface IProps {
}

interface IState {
  editorState: any,
  html: any
}

export default class Detail extends React.Component<IProps, IState> {

  state = {
    html: '<p style="text-align:center;" size="0" _root="undefined" __ownerID="undefined" __hash="undefined" __altered="false"><span style="font-size:30px"><span style="line-height:1.2"><span style="letter-spacing:4px"><span style="color:#07a9fe"><strong><em><u>你好，世界!</u></em></strong></span></span></span></span></p><p></p>',
    editorState: BraftEditor.createEditorState('')
  }

  public handleChange = (editorState: any) => {
    this.setState({ editorState })
  }

  public preview = () => {

    if ((window as any).previewWindow) {
      (window as any).previewWindow.close()
    }

    document.write(this.buildPreviewHtml())

  }

  public buildPreviewHtml () {

    // return `${this.state.html}`

    return `
      <!Doctype html>
      <html>
        <head>
          <title>详情</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.html}</div>
        </body>
      </html>
    `

  }

  public render () {
    this.preview()

    return (
      <div className="editor-wrapper">
      </div>
    )

  }

}