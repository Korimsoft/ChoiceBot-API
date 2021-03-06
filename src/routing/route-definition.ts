export interface RouteDefinition {
  path: string;
  requestMethod: RequestMethod
  handler: any;
}


export enum RequestMethod {
  GET='get', 
  POST='post', 
  DELTE='delete', 
  OPTIONS='options',
  PUT='put',
  PATCH='patch'
}