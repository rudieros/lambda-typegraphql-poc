import { ContainerInstance } from "typedi";
import { OSContextType } from "../../context";

export class BaseDynamoMainTableDataBase {
  context: OSContextType;
  constructor(container: ContainerInstance) {
    this.context = container.get("context");
  }
  mapIdToDynamoPrimaryKey(id) {
    return { id };
  }
  mapParamsToDynamoQueryKey1(params: any) {
    throw (new Error("NotImplemented").message =
      "You need to implement BaseDynamoMainTableDataBase.mapParamsToDynamoQueryKey1");
  }
}
