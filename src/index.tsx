/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App'

import './styles/index.css'

const root = document.getElementById('root')

if (Boolean(import.meta.env.DEV) && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, root!)
