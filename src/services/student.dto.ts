export interface IStudent {
  id: string
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: string
  birthday: string
  gender: string
  bloodType: string
}

export interface IStudentResponse {
  id: string
  created_at: string
  updated_at: string
  first_name: string
  last_name: string
  birthday: string
  gender: string
  blood_type: string
}

export const studentDto = (data: IStudentResponse): IStudent => ({
  id: data.id,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
  firstName: data.first_name,
  lastName: data.last_name,
  birthday: data.birthday,
  gender: data.gender,
  bloodType: data.blood_type,
})
