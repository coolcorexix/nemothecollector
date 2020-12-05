import { IBookmarkItemTag } from './IBookmarkItemTag.model';
export interface IBookmarkItem {
    id: number;
    title: string;
    url: string;
    tags: IBookmarkItemTag[];
    readAt: string;
}