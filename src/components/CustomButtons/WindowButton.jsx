import Button from './Button.jsx'

const WindowButton = (props) => (
  <Button {...props} color={window.innerWidth < 960 ? 'info' : 'white'} />
)

export default WindowButton
