import request from './request';

export const getMealList = async (): Promise<any> => {
  return request.get(`/search.php?s=`);
};

export const getMealDetail = async ({ id }: { id: string }): Promise<any> => {
  return request.get(`/lookup.php?i=${id}`);
};

export const getMealSearch = async ({ searchTerm }: { searchTerm: string }): Promise<any> => {
  return request.get(`/search.php?s=${searchTerm}`);
};
