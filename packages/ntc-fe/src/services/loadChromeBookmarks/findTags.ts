import { IResponseBookmarkTag } from "./loadChromeBookmarks.models";

export function findTags(): IResponseBookmarkTag[] {
    const rawBookmarks = require('./chrome_bookmarks.json');
    const tags = [];
    rawBookmarks.forEach(item => {
        if (!item.url) {
            const relevantTags = [item];
            rawBookmarks.forEach(rBm => {
                if (Number(item.parentId) ===  rBm.id) {
                    relevantTags.push(rBm);
                }
            })
            tags.push({
                ...item,
                relevantTags,
            });

        }
    });
    return tags;
}