import { v4 as uuidv4 } from 'uuid';

export interface RequestContextData {
  tid: string;
  headers: Record<string, string>;
}

class RequestContext {
  public data: RequestContextData;

  private static instance: RequestContext;

  private constructor() {
    this.data = { tid: uuidv4(), headers: {} };
  }

  public static getInstance(): RequestContext {
    if (!RequestContext.instance) {
      RequestContext.instance = new RequestContext();
    }
    return RequestContext.instance;
  }

  public reset(headers: Record<string, string> = {}) {
    this.data = { tid: uuidv4(), headers };
  }
}

export default RequestContext;
