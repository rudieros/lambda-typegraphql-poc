import { UserDB, UserEntity } from '../../database/entities/userEntity'

export const MOCK_USERS_ME: UserDB = {
  id: '1',
  sort: 'user',
  email: 'ned@starks.com',
  name: 'Ned Stark'
}

export const MOCK_USERS: UserDB[] = [
  MOCK_USERS_ME,
  {
    id: '2',
    sort: 'user',
    email: 'arya@starks.com',
    name: 'Arya Stark'
  }
]

export const injectUsersMocks = async () => {
  console.log('===> Will inject Users Mocks')
  await UserEntity.batchPut(MOCK_USERS)
}
