import React, { useEffect, useState } from 'react';
import { SearchPageContainer } from 'styles/SearchPage.styled';
import { SearchBar } from 'src/components/SearchBar';
import { Headline } from 'src/common/Headline.styled';
import { PageWrapper } from 'src/common/PageWrapper.styled';
import { Bookmark } from 'src/components/Bookmark';
import { loadChromeBookmarks } from 'src/services/loadChromeBookmarks';
import { ManyCubes } from 'src/illstrustration/ManyCubes';
import { IBookmarkItem } from 'src/models/IBookmarkItem.model';

function SearchPage() {
    const [bookmarkItems, setBookmarkItems] = useState<IBookmarkItem[]>([]);
    useEffect(() => {
        setBookmarkItems(loadChromeBookmarks());
    }, []);

    return (
        <PageWrapper>
            <SearchPageContainer>
                <SearchBar />
                <span className='py-8 text-6xl'>
                    Just read this week:
                </span>
                {bookmarkItems.map((bookmarkItem) =>
                (<Bookmark
                    key={bookmarkItem.id}
                    title={bookmarkItem.title}
                    link={bookmarkItem.url}
                    tags={bookmarkItem.tags}
                    readAt={bookmarkItem.readAt}
                />))}
            </SearchPageContainer>
        </PageWrapper>
    )
}


export default SearchPage;