import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
// state
import { Subscribe } from 'unstated'
import { UserStateContainer } from '../../utils/unstated'
// nodejs library that concatenates classes
import classNames from 'classnames'
// style
import 'react-quill/dist/quill.snow.css'
// gql constant
import { updateUserIntro } from '../../constants/mutationOperations'
import { userIntro } from '../../constants/queryOperations'
// components
import Tooltip from '@material-ui/core/Tooltip'
import ReactQuill from 'react-quill'
import Interweave from 'interweave'
import handleError from '../../utils/handleError'

class QuillEditor extends Component {
  state = {
    htmlString: '',
    editMode: false,
  }
  handleTextChange = (value) => {
    try {
      const quill = this.reactQuill.getEditor()
      const limit = 1000
      if (quill.getLength() > limit) {
        quill.deleteText(limit, quill.getLength())
      }
      this.text = value
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
      // this component is exported dynamically so need to pass the store from _app
      <Subscribe to={[UserStateContainer]}>
        {(userStateStore) => (
          <div className={classNames(classes.description, classes.textCenter)}>
            {editMode ? (
              <Tooltip
                id='tooltip-top'
                title='double click to finish edit or press escape to cancel'
                placement='left-end'
                classes={{ tooltip: classes.tooltip }}
              >
                <Mutation mutation={updateUserIntro}>
                  {(updateUserIntro) => {
                    return (
                      <div
                        onDoubleClick={async () => {
                          const htmlString = this.text
                          this.setState({
                            editMode: false,
                            htmlString,
                          })
                          await updateUserIntro({
                            variables: { data: { userIntro: htmlString } },
                          }).catch((err) => handleError(err))
                          // update Query cache, should have better way to do this, need more research
                          this.refetch()
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
                              [
                                'bold',
                                'italic',
                                'underline',
                                'strike',
                                'blockquote',
                              ],
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
                          placeholder={`...write something about yourself`}
                        />
                      </div>
                    )
                  }}
                </Mutation>
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
                  <Query
                    query={userIntro}
                    variables={{ username: userStateStore.state.username }}
                  >
                    {({ data, error, refetch }) => {
                      this.refetch = refetch
                      if (error) {
                        return handleError(error).component
                      }
                      let userIntro = ''
                      if (htmlString && htmlString.length > 0) {
                        userIntro = htmlString
                      } else if (!data.user) {
                        userIntro = '<p> loading... </p>'
                      } else {
                        userIntro = data.user.userIntro
                        this.setState({ htmlString: data.user.userIntro })
                      }

                      return <Interweave content={userIntro} />
                    }}
                  </Query>
                </div>
              </Tooltip>
            )}
          </div>
        )}
      </Subscribe>
    )
  }
}
QuillEditor.propTypes = {
  classes: PropTypes.object,
}

export { QuillEditor as default }
