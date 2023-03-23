import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const getBaseHeaders = (headers: any = {}) => {
  return headers;
};

class Request {
  baseHeaders = getBaseHeaders();

  instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      ...getBaseHeaders(),
    },
  });

  get = async <T>(dest: string, params = {}, config: Partial<AxiosRequestConfig> = {}): Promise<T> => {
    const { data } = await this.instance.get<T>(dest, {
      ...config,
      headers: getBaseHeaders(config.headers),
      params,
    });

    return data;
  };
}

export default new Request();
