export function filterBookmarks(
  keyword: string,
  bookmarksInput: {
    name?: string;
    url?: string;
    children?: { name?: string; url?: string; children?: any }[];
  }
) {
  let temp: {
    name?: string;
    children?: any;
  } = {};
  const rs = [];
  function recursiveSearch(
    keyword: string,
    input: {
      name?: string;
      url?: string;
      children?: { name?: string; url?: string; children?: any }[];
    }
  ) {
    if (input.name.toLowerCase().includes(keyword.toLowerCase().trim())) {
      rs.push(input);
      return;
    } else {
      temp.name = input.name;
      temp.children = [];
      if (input.children) {
        input.children.map((c) => {
          temp.children.push(recursiveSearch(keyword, c));
        });
      }
    }
  }
  recursiveSearch(keyword, bookmarksInput);
  return rs;
}
