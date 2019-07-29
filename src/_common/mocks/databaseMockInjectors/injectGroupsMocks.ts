import { GroupDB, GroupEntity } from "../../database/entities/groupEntity";
import { MOCK_USERS } from "./injectUserMocks";

export const MOCK_GROUPS = {
  houseStark: {
    id: "nci39fhal",
    name: "House Stark",
    memberCount: 122,
    creatorId: MOCK_USERS.me.id,
    queryPartition1: MOCK_USERS.me.id,
    querySort1: "2019-07-29T02:21:24.982Z"
  } as GroupDB,
  lordsOfWinterfell: {
    id: "ij19dl10",
    name: "Lords of Winterfell",
    memberCount: 4,
    creatorId: MOCK_USERS.me.id,
    queryPartition1: MOCK_USERS.me.id,
    querySort1: "2019-07-29T02:20:42.069Z"
  } as GroupDB,
  houseLannister: {
    id: "k20dksl",
    name: "House Lannister",
    memberCount: 123,
    creatorId: MOCK_USERS.tywin.id,
    queryPartition1: MOCK_USERS.tywin.id,
    querySort1: "2019-07-29T02:20:42.069Z"
  } as GroupDB,
  manyFacePeople: {
    id: "i2kd91k",
    name: "Many Face People",
    memberCount: 1,
    creatorId: MOCK_USERS.arya.id,
    queryPartition1: MOCK_USERS.arya.id,
    querySort1: "2019-07-29T02:20:42.069Z"
  } as GroupDB
};

export const injectGroupMocks = async () => {
  console.log("===> Will inject Group Mocks");
  await GroupEntity.batchPut(Object.values(MOCK_GROUPS)).catch(e => {
    console.log("E", e);
  });
};
