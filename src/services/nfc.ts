import { isAvailable, scan, textRecord, write } from '@tauri-apps/plugin-nfc'

export const checkNFC = async (): Promise<boolean> => await isAvailable()

export const readNFC = async () =>
  await scan({ type: 'tag', keepSessionAlive: true })

export const writeNFC = async () => {
  await write([textRecord('Tauri is awesome!')])
}
