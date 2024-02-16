import {
  type Component,
  createSignal,
  createEffect,
  getOwner,
  runWithOwner,
} from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { ROUTES } from '../constants/routes'
import { signin } from '../services/auth.services'
import { useAuth } from '../context/auth.context'

import Input from '../components/Input'
import Button from '../components/Button'

const Login: Component = () => {
  const navigate = useNavigate()
  const owner = getOwner()
  const { authStore, setAuthStore } = useAuth()

  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')

  createEffect(() => {
    if (authStore.user.id !== '') navigate(ROUTES.READER)
  })

  const handleSignin = (): void => {
    runWithOwner(owner, () => {
      signin({
        email: email(),
        password: password(),
      })
        .then((auth) => {
          setAuthStore(auth)
          navigate(ROUTES.READER)
        })
        .catch((error) => {
          console.error(error)
        })
    })

    setEmail('')
    setPassword('')
  }

  return (
    <div class="flex flex-col gap-4">
      <div>Login</div>
      <Input label="Email" value={email} onChange={setEmail} />
      <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Button title="Ingresar" onClick={handleSignin} />
    </div>
  )
}

export default Login
