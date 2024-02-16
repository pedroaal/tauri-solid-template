import { useParams } from '@solidjs/router'
import { createResource, type Component } from 'solid-js'

import { getStudentById } from '../services/student.services'

const User: Component = () => {
  const params = useParams()

  const [student] = createResource(params.id, getStudentById)

  return (
    <div class="flex flex-col gap-4">
      <h4>Nombre: {student()?.firstName}</h4>
      <h4>Apellido: {student()?.lastName}</h4>
      <h4>Genero: {student()?.gender}</h4>
      <h4>Cumpleaños: {student()?.birthday}</h4>
      <h4>Sangre: {student()?.bloodType}</h4>
    </div>
  )
}

export default User
