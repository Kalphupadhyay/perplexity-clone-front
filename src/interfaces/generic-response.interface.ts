export interface IGenericApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
