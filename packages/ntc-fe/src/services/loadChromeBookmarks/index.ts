import { IBookmarkItem } from "src/models/IBookmarkItem.model";
import { IResponseBookmark } from './loadChromeBookmarks.models';
import { findTags } from './findTags';

export function loadChromeBookmarks(): IBookmarkItem[] {
    const rawBookmarks: IResponseBookmark[] = require('./chrome_bookmarks.json');
    const links: (IResponseBookmark & {
        attachedTags?: IResponseBookmark[];
    })[] = [];
    const tags = findTags();
    rawBookmarks.forEach(item => {
        if (item.url) {
            const linkWithAttachedTags: IResponseBookmark & {
                attachedTags?: IResponseBookmark[];
            } = {
                ...item,
            }
            tags.forEach(tag => {
                if (Number(item.parentId) === tag.id) {
                    linkWithAttachedTags.attachedTags = tag.relevantTags;
                }
            })
            links.push(linkWithAttachedTags);
        }
    });
    return links.map(link => ({
        id: link.id,
        title: link.title,
        url: link.url,
        tags: link.attachedTags.map(tag => ({
            id: tag.id,
            name: tag.title,   
        })),
        readAt: link.dateAddedLocal,
    }));
}