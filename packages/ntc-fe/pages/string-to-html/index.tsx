import React from 'react';

const innerHTMLContent = require('./rs-to-hack.json').posts[0].content;

function StringToHTML() {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: innerHTMLContent,
            }}
        >
            
        </div>
    );
}

export default StringToHTML;