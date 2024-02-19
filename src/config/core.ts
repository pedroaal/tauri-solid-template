import { type JSX } from 'solid-js'
export const ALERT_TIMEOUT = 3000

export interface IIcon {
  path: JSX.Element
  outline: boolean
  mini: boolean
}

export interface IOption {
  label: string
  value: string
}
