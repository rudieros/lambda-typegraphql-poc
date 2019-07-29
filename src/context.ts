import { ContainerInstance } from 'typedi'

export interface OSContextType {
  uid: string | undefined
  userRole: any | undefined
  requestId: string
  container: ContainerInstance
}
