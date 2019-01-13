import { Component } from 'react'
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
import Tooltip from '@material-ui/core/Tooltip'
import ReactQuill from 'react-quill'
import Interweave from 'interweave'
import 'react-quill/dist/quill.snow.css'

class QuillEditor extends Component {
  state = {
    htmlString: `<p> An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>`,
    editMode: false,
  }
  handleTextChange = () => {
    try {
      const quill = this.reactQuill.getEditor()
      const limit = 1000
      if (quill.getLength() > limit) {
        quill.deleteText(limit, quill.getLength())
      }
    } catch (err) {
      return
    }
  }

  render() {
    const {
      props: { classes },
      state: { htmlString, editMode },
      handleTextChange,
    } = this
    return (
      <div className={classNames(classes.description, classes.textCenter)}>
        {editMode ? (
          <Tooltip
            id='tooltip-top'
            title='double click to finish edit or press escape to cancel'
            placement='left-end'
            classes={{ tooltip: classes.tooltip }}
          >
            <div
              onDoubleClick={() => {
                this.setState({
                  editMode: false,
                  htmlString: this.reactQuill.getEditor().getText(),
                })
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 27) {
                  this.setState({
                    editMode: false,
                  })
                }
              }}
            >
              <ReactQuill
                ref={(reactQuill) => {
                  this.reactQuill = reactQuill
                }}
                theme='snow'
                value={htmlString}
                onChange={handleTextChange}
                modules={{
                  toolbar: [
                    [{ header: '1' }, { header: '2' }, { font: [] }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                      { list: 'ordered' },
                      { list: 'bullet' },
                      { indent: '-1' },
                      { indent: '+1' },
                    ],
                    ['link', 'image', 'video'],
                    ['clean'],
                  ],
                  clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                  },
                }}
                formats={[
                  'header',
                  'font',
                  'size',
                  'bold',
                  'italic',
                  'underline',
                  'strike',
                  'blockquote',
                  'list',
                  'bullet',
                  'indent',
                  'link',
                  'image',
                  'video',
                ]}
                placeholder={`...write something`}
              />
            </div>
          </Tooltip>
        ) : (
          <Tooltip
            id='tooltip-top'
            title='double click to edit'
            placement='right-end'
            classes={{ tooltip: classes.tooltip }}
          >
            <div
              onDoubleClick={() => {
                this.setState({ editMode: true })
              }}
            >
              <Interweave content={htmlString} />
            </div>
          </Tooltip>
        )}
      </div>
    )
  }
}
QuillEditor.propTypes = {
  classes: PropTypes.object,
}

export default QuillEditor
