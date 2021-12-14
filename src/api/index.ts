import { IPhoto } from '../types';
import { instance } from './instance';

export const photosAPI = {
  getPhotos: async ({ page = 1, search = '' }) => {
    const response = await instance.get<IPhoto[]>(
      `photos?_limit=100&_page=${page}&q=${search}`
    );
    const totalCount = +response.headers['x-total-count'];

    return { photos: response.data, totalCount };
  },
};
