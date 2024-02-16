import {
  type Component,
  createContext,
  type JSXElement,
  useContext,
} from 'solid-js'
import { type SetStoreFunction, createStore } from 'solid-js/store'
import { type IAuth } from '../services/auth.dto'

interface IContext {
  authStore: IAuth
  setAuthStore: SetStoreFunction<IAuth>
}

interface IProps {
  children: JSXElement
}

const Context = createContext<IContext>()

export const AuthProvider: Component<IProps> = (props) => {
  const [authStore, setAuthStore] = createStore<IAuth>({
    user: {
      id: '',
      email: '',
      role: '',
    },
    session: {
      accessToken: '',
      refreshToken: '',
    },
  })

  return (
    <Context.Provider value={{ authStore, setAuthStore }}>
      {props.children}
    </Context.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useAuth = (): IContext => useContext(Context)!
