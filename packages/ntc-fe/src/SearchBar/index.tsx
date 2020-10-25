import React, { useState } from 'react';
import { SearchBarContainer } from './SearchBar.styled';

export function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    return (<SearchBarContainer isActive={isFocused || !!value}>
        <div className='shadow' />
        <div className='content'>
            <input type='text'
                onChange={e => {
                    setValue(e.target.value);
                }}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
        
            
        </SearchBarContainer>)
}