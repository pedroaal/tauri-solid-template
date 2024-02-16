import { type Component } from 'solid-js'
import { Route, Router } from '@solidjs/router'

import { ROUTES } from './constants/routes'
import { CoreProvider } from './context/core.context'
import { AuthProvider } from './context/auth.context'

import Loader from './components/Loader'
import Alerts from './components/Alerts'
import Login from './pages/Login'
import Reader from './pages/Reader'
import Student from './pages/Student'
import Protected from './components/Protected'

const App: Component = () => (
  <CoreProvider>
    <AuthProvider>
      <Alerts />
      <Loader />
      <div class="container mx-auto p-5">
        <header class="text-center">NF Reader</header>
        <Router>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path="" component={Protected}>
            <Route path={ROUTES.READER} component={Reader} />
            <Route path={ROUTES.STUDENT} component={Student} />
          </Route>
        </Router>
      </div>
    </AuthProvider>
  </CoreProvider>
)

export default App
