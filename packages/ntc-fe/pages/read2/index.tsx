import React from 'react';
import FolderTree from './react-folder-tree.bundle';
import { SearchBar } from 'src/components/SearchBar';
import { convertJsonToTreeViewFormat } from 'src/read2/services/convertJsonToTreeViewFormat';
import { filterBookmarks } from 'src/read2/services/filterBookmarks';
import { ManyCubes } from 'src/illstrustration/ManyCubes';
const treeViewFormat = convertJsonToTreeViewFormat();
export default function Read2() {
  const [keyword, setKeyword] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  React.useEffect(() => {
    if (keyword) {
      setSearchResult(filterBookmarks(keyword, treeViewFormat.output));
    }
  }, [keyword]);
  return (
    <main className="max-w-screen-sm px-2 py-4 sm:px-0 m-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="w-8/12 pb-4">
          <SearchBar
            onChange={(keyword) => {
              setKeyword(keyword);
            }}
            placeholder={`${treeViewFormat.noBm} bookmarks`}
          />
        </div>
        <ManyCubes />
      </div>
      {keyword ? (
        <>
          {searchResult.map((sR) => {
            return (
              <FolderTree
                data={sR}
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
            );
          })}
        </>
      ) : (
        <FolderTree
          data={treeViewFormat.output}
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
      )}
    </main>
  );
}
``;
