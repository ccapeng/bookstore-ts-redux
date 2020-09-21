import Request from "./request";
import { ICategory } from "../model";

const CategoryService = {
  list: () => {
    let url = "api/category/";
    return Request.get(url);
  },
  get: (categoryId: number) => {
    let url = `api/category/${categoryId}/`;
    return Request.get(url);
  },
  save: (category: ICategory) => {
    if (category.id === 0) {
      const body = JSON.stringify({ name: category.name });
      let url = "api/category/";
      return Request.create(url, body);
    } else {
      const body = JSON.stringify(category);
      let url = `api/category/${category.id}/`;
      return Request.update(url, body);
    }
  },
  delete: (categoryId: number) => {
    let url = `api/category/${categoryId}/`;
    return Request.delete(url);
  }
}

export default CategoryService;