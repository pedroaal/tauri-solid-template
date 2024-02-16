import { invoke } from '@tauri-apps/api/core'

export const checkNFC = async (): Promise<boolean> => {
  console.log('Checking NFC...')
  await invoke('nfc_check')
  return true
}

export const readNFC = async () => {
  console.log('Reading NFC...')
  await invoke('nfc_read')
  return true
}

export const writeNFC = async () => {
  console.log('Writing NFC...')
  await invoke('nfc_write')
  return true
}
