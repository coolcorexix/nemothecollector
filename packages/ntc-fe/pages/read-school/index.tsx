import React from 'react';
import FolderTree from '../read2/react-folder-tree.bundle';
const schoolDoc = require('src/read-school/school-doc.json');

function ReadSchool() {
  return (
    <main className=" bg-yellow-100 max-w-screen-sm px-2 py-4 sm:px-0 m-auto">
      <div className="flex flex-row items-center justify-between">
        <FolderTree
          data={schoolDoc}
          renderItem={(props) => {
            if (props.url) {
              return (
                <a href={props.url} target="_blank">
                  {props.name}
                </a>
              );
            }
            return <span>{props.name}</span>;
          }}
        />
      </div>
    </main>
  );
}

export default ReadSchool;
