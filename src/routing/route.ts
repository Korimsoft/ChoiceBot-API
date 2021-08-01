import { RequestMethod, RouteDefinition } from './route-definition';
import 'reflect-metadata';

export const Route = (path: string, method: RequestMethod): MethodDecorator => {
    
    return (target: Object, propertyKey: string | symbol): void => {
    
      if (! Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.metadata('routes', target.constructor);
      }
  
      const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
  
      routes.push({
        requestMethod: method,
        path,
        methodName: propertyKey
      });
      Reflect.defineMetadata('routes', routes, target.constructor);
    };
  };
  