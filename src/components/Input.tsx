import { type Accessor, type Setter, Show, type Component } from 'solid-js'

interface IProps {
  label?: string
  type?: 'text' | 'password' | 'email' | 'number'
  onChange: Setter<string>
  value: Accessor<string>
}

const Input: Component<IProps> = (props) => (
  <label class="form-control w-full">
    <Show when={props.label}>
      <div class="label">
        <span class="label-text">{props.label}</span>
      </div>
    </Show>
    <input
      value={props.value()}
      type={props.type ?? 'text'}
      onChange={(e) => props.onChange(e.currentTarget.value)}
      class="input input-bordered w-full"
    />
  </label>
)

export default Input
