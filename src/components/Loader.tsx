import { Show, type Component } from 'solid-js'

import { useCore } from '../context/core.context'

const Loader: Component = () => {
  const { loader } = useCore()

  return (
    <Show when={loader().length > 0}>
      <div class="fixed left-0 top-0 z-50 h-screen w-screen bg-white/25 backdrop-blur-sm">
        <div class="flex h-full w-full items-center justify-center">
          <span class="loading loading-spinner loading-lg text-primary" />
        </div>
      </div>
    </Show>
  )
}

export default Loader
