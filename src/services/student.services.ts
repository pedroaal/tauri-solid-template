import supabase from '../config/supabase'

import { getId } from '../utils/strings'
import { useCore } from '../context/core.context'
import { type IStudentResponse, studentDto, type IStudent } from './student.dto'

export const getStudentById = async (id: string): Promise<IStudent> => {
  const { addAlert, addLoader, removeLoader } = useCore()

  const loaderId = getId()
  addLoader(loaderId)

  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single()

  removeLoader(loaderId)

  if (error != null) {
    addAlert({ id: getId(), type: 'error', message: 'Student error' })
    console.error('🚀 ~ user.service:', error)
    throw error
  }

  addAlert({ id: getId(), type: 'success', message: 'Student success' })
  return studentDto(data as IStudentResponse)
}
