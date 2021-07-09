const data = require('./bookmarks.json');

export function convertJsonToTreeViewFormat() {
    const blacklistedLevel1Folders=['Workplace',];
    let noBm = 0;
    function recursiveTransforming(input: {
        name?: string;
        url?: string;
        children?: {name?: string , url?: string, children?: any}[];
    }):  {
        name?: string;
        url?: string;
        children?: {name?: string, url?: string, children?: any}[];
    }{
        if (blacklistedLevel1Folders.includes(input.name)) {
            return {
                name: input.name,
            }
        }
        if (input.children) {
            return {
                ...input,
                children: input.children.map(c => {
                    return recursiveTransforming(c);
                }),
            }
        }
        if (input.name && input.url) {
            noBm++;
            return input;
        }
        return input;
    }

    const output = recursiveTransforming(data.roots.bookmark_bar);
    blacklistedLevel1Folders.forEach(toBlacklistFolderName => {
        output.children = output.children.filter(child => child.name !== toBlacklistFolderName); 
    })
    return {
        output,
        noBm,
    }
}