import { RequestMethod, RouteDefinition } from './route-definition';
import 'reflect-metadata';

export const Route = (path: string, method: RequestMethod): MethodDecorator => {
    
    return (target: Object, propertyKey: string | symbol): void => {
    
      if (! Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
      }
  
      const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];
  
      routes.push({
        requestMethod: method,
        path,
        handler: (target as any)[propertyKey]
      });
      Reflect.defineMetadata('routes', routes, target.constructor);
    };
  };
  