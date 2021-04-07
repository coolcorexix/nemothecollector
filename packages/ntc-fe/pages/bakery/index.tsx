import React from 'react';
import { PageContainer } from 'src/components/PageContainer';
import { SectionContainer } from 'src/components/SectionContainer';
import { EatItem } from './EatItem';
function BakeryPage(props) {
    return (
        <PageContainer>
            <div className='mb-4'>
                <div className='mb-2'>
                    <span className='text-9xl'>
                        Tiệm bánh 2ng6m
                    </span>
                </div>
                <span>
                    Chúng tôi bán bánh vị vui nhộn
                </span>
            </div>
            <SectionContainer>
                <EatItem />
            </SectionContainer>
            
        </PageContainer>
    );
}

export default BakeryPage;