import React from 'react';
import { SearchPageContainer } from './SearchPage.styled';
import { SearchBar } from 'src/SearchBar';
import { Headline } from 'src/common/Headline.styled';
import { PageWrapper } from 'src/common/PageWrapper.styled';
import MockData from 'src/Bookmark/mock_data';
import { Bookmark } from 'src/Bookmark';
import { ManyCubes } from 'src/illstrustration/ManyCubes';

function SearchPage() {
    return (
        <PageWrapper>
            <SearchPageContainer>
                <SearchBar />
                <Headline>
                    Just read this week:
                </Headline>
                <Bookmark
                    title={MockData.title}
                    link={MockData.link}
                    tags={MockData.tags}
                    readAt={MockData.readAt}
                />
            </SearchPageContainer>
        </PageWrapper>
    )
}


export default SearchPage;