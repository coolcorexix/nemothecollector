import React, { useState } from 'react';
import { SearchBarContainer } from './SearchBar.styled';

export function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    return (<SearchBarContainer isFocused={isFocused}>
        <div className='shadow' />
        <div className='content'>
            <input type='text' 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
        
            
        </SearchBarContainer>)
}