import { UserDB, UserEntity } from '../../database/entities/userEntity'

export const MOCK_USERS_ME: UserDB = {
  id: 'ned',
  email: 'ned@starks.com',
  name: 'Ned Stark',
}

export const MOCK_USERS = {
  me: MOCK_USERS_ME,
  arya: {
    id: 'arya',
    email: 'arya@starks.com',
    name: 'Arya Stark',
  } as UserDB,
  tywin: {
    id: 'tywin',
    email: 'tywin@lannister.com',
    name: 'Tywin Lannister',
  },
  jamie: {
    id: 'jamie',
    email: 'jamie@lannister.com',
    name: 'Jamie Lannister',
  },
  rooseBolton: {
    id: 'roose',
    email: 'roose@bolton.com',
    name: 'Roose Bolton',
  },
}

export const injectUserMocks = async () => {
  console.log('===> Will inject Users Mocks')
  await UserEntity.batchPut(
    Object.values(MOCK_USERS)
    // .map((user) => ({ ...user, sort: 'user' }))
  ).catch((e) => {
    console.log('E', e)
  })
}
