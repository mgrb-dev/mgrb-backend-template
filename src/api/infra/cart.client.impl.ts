import {
  BaseHttpClient,
  HttpClientConfig,
} from '#shared/http-client/http-client';
import { CartClient } from '#api/infra/cart.client';
import { ExternalCartsResponse } from '#external-models/cart/cart';
import { Endpoint } from '#types/endpoint';

export class CartClientImpl extends BaseHttpClient implements CartClient {
  constructor(config: Endpoint) {
    const options: HttpClientConfig = {
      baseURL: config.baseUrl,
      timeout: config.timeout,
    };
    super(options);
  }

  async getCart(): Promise<ExternalCartsResponse> {
    const response = await this.instance.get<ExternalCartsResponse>('/carts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
}
