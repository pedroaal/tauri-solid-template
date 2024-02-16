import { type Component } from 'solid-js'

interface IProps {
  title?: string
  onClick: () => void
  disabled?: boolean
}

const Button: Component<IProps> = (props) => (
  <button
    class="btn btn-primary"
    onClick={() => {
      props.onClick()
    }}
    disabled={props.disabled}
  >
    {props.title}
  </button>
)

export default Button
