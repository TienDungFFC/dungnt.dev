export interface Posts {
    data: Array<PostItemType>
}
  
export interface PostItemType {
    id: string,
    title: string,
    updated_at: string,
    description: string
    thumb?: string,
    slug: string
}