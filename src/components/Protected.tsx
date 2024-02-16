import { type Component, Show, createEffect, type JSX } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { useAuth } from '../context/auth.context'
import { ROUTES } from '../constants/routes'

interface IProps {
  children?: JSX.Element
}

const Protected: Component<IProps> = (props) => {
  const navigate = useNavigate()
  const { authStore } = useAuth()

  createEffect(() => {
    if (authStore.user.id === '') navigate(ROUTES.LOGIN)
  })

  return <Show when={authStore.user.id}>{props.children}</Show>
}

export default Protected
