import React from 'react';
const data = require('./bookmarks.json');

export function convertJsonToTreeViewFormat() {
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

    const output = recursiveTransforming(data);
    return {
        output,
        noBm,
    }
}