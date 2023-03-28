export interface CategoryItem {
  categoryTitle: string;
  route: string;
  categoryContents: {
    thumbnailTitle: string;
    imgUrl: string;
  }[];
}
