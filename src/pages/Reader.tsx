import { createEffect, type Component, createSignal } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { ROUTES } from '../constants/routes'
import { useCore } from '../context/core.context'
import { checkNFC, readNFC, writeNFC } from '../services/nfc'

import Button from '../components/Button'

const Reader: Component = () => {
  const navigate = useNavigate()
  const { addAlert } = useCore()

  const [isDisabled, setIsDisabled] = createSignal(false)

  createEffect(() => {
    const hasNFC = checkNFC()
    if (!hasNFC) {
      addAlert({
        id: 'nfc-not-supported',
        type: 'error',
        message: 'NFC is not supported on this device',
      })
      setIsDisabled(true)
    }
  })

  const handleRead = (): void => {
    readNFC()
      .then((studentId) => {
        if (studentId != null) {
          navigate(ROUTES.STUDENT.replace(':id', studentId))
        }
      })
      .catch((error) => {
        console.error(`Argh! ${error}`)
        addAlert({
          id: 'nfc-read-error',
          type: 'error',
          message: 'Argh! Cannot read data from the NFC tag. Try another one?',
        })
      })
  }

  const handleWrite = (): void => {
    writeNFC()
      .then(() => {
        console.log('> Message written')
      })
      .catch(() => {
        console.error(
          'Argh! Cannot write data to the NFC tag. Try another one?',
        )
      })
  }

  return (
    <div class="flex justify-around">
      <Button title="Read" onClick={handleRead} disabled={isDisabled()} />
      <Button title="write" onClick={handleWrite} disabled={isDisabled()} />
    </div>
  )
}

export default Reader
