export interface Categories {
    data: Array<CategoryItemType>
}
  
export interface CategoryItemType {
    id: string,
    title: string,
    slug: string,
}