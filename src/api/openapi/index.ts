import {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { CartSchema } from '#domain/cart';
import type { OpenAPIObject } from '@asteasolutions/zod-to-openapi/dist/types';

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();

function registerPaths(): void {
  registry.registerPath({
    method: 'get',
    path: '/v1/cart',
    description: 'Get cart',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: CartSchema,
          },
        },
      },
      400: {
        description: 'Bad request',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
              httpStatus: z.number(),
            }),
          },
        },
      },
      404: {
        description: 'Not found',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
              httpStatus: z.number(),
            }),
          },
        },
      },
      500: {
        description: 'Internal server error',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
              httpStatus: z.number(),
            }),
          },
        },
      },
    },
  });
}

export function getOpenApiSpec(): OpenAPIObject {
  registerPaths();
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'mgrb-backend-template',
      description: 'Simple backend template',
    },
    servers: [{ url: '/v1' }],
  }) as OpenAPIObject;
}
