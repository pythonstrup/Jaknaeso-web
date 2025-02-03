export interface ResponseAPI {
  result: 'SUCCESS' | 'ERROR';
  status: number;
}

export interface ResponseDTO<T = object> extends ResponseAPI {
  data: T;
}
export interface ResponseErrorObj {
  code: string;
  message: string;
  data: null;
}

export interface ResponseErrorAPI {
  result: 'SUCCESS' | 'ERROR';
  data: null;
  error: ResponseErrorObj;
}
