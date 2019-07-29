import { MOCK_USERS } from './injectUserMocks'
import {
  UserGroupRelationDB,
  UserGroupRelationsEntity,
} from '../../database/entities/userGroupRelationEntity'
import { MOCK_GROUPS } from './injectGroupsMocks'

export const MOCK_USER_GROUP_RELATIONS: UserGroupRelationDB[] = [
  {
    id: MOCK_USERS.me.id,
    sort: MOCK_GROUPS.houseStark.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
  {
    id: MOCK_USERS.me.id,
    sort: MOCK_GROUPS.lordsOfWinterfell.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
  {
    id: MOCK_USERS.arya.id,
    sort: MOCK_GROUPS.houseStark.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
  {
    id: MOCK_USERS.arya.id,
    sort: MOCK_GROUPS.lordsOfWinterfell.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
  {
    id: MOCK_USERS.arya.id,
    sort: MOCK_GROUPS.manyFacePeople.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
  {
    id: MOCK_USERS.jamie.id,
    sort: MOCK_GROUPS.houseLannister.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
  {
    id: MOCK_USERS.tywin.id,
    sort: MOCK_GROUPS.houseLannister.id,
    creationDate: '2019-07-29T02:21:24.982Z',
  },
]

export const injectUserGroupRelationMocks = async () => {
  console.log('===> Will inject UserGroupRelation Mocks')
  await UserGroupRelationsEntity.batchPut(MOCK_USER_GROUP_RELATIONS).catch(
    (e) => {
      console.log('E', e)
    }
  )
}
