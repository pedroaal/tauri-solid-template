import { useCore } from '../context/core.context'
import { getId } from '../utils/strings'
import { authDto, type IAuth, type IAuthResponse } from './auth.dto'

interface ISignin {
  email: string
  password: string
}

export const signin = async (body: ISignin): Promise<IAuth> => {
  const { addAlert, addLoader, removeLoader } = useCore()

  const serviceId = getId()
  addLoader(serviceId)

  const { data, error } = await fetch('/api/auth/signin', { body })

  removeLoader(serviceId)

  if (error !== null) {
    console.error('Error signing in:', error)
    addAlert({ id: serviceId, type: 'error', message: 'Login error' })
    throw error
  }

  addAlert({ id: serviceId, type: 'success', message: 'Login success' })

  return authDto(data as IAuthResponse)
}
