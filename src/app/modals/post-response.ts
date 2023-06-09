export interface Content {
  content: PostResponse[];
  pageNo: Number;
  pageSize: Number;
  totalElements: Number;
  totalPages: Number;
  lastPage: boolean;
}

export interface PostResponse {
  id: Number;
  title: string;
  description: string;
  image: string;
  profileImage: string;
  createdBy: string;
  createDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  comments: CommentResponse[];
  categoryId: Number;
}

export interface CommentResponse {
  id: Number;
  body: string;
  profileImage: string;
  createdBy: string;
  createDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}
