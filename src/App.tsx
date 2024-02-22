import { type Component } from 'solid-js'
import { Route, Router } from '@solidjs/router'

import { ROUTES } from './constants/routes'
import { CoreProvider } from './context/core.context'
import { AuthProvider } from './context/auth.context'

import Loader from './components/Loader'
import Alerts from './components/Alerts'
import HomePage from './pages/HomePage'
import Protected from './components/Protected'

const App: Component = () => (
  <CoreProvider>
    <AuthProvider>
      <Alerts />
      <Loader />
      <div class="container mx-auto p-5">
        <header class="text-center">Tauri - Solid</header>
        <Router>
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path="" component={Protected}>
            {/* <Route path={ROUTES.HOME} component={HomePage} /> */}
          </Route>
        </Router>
      </div>
    </AuthProvider>
  </CoreProvider>
)

export default App
