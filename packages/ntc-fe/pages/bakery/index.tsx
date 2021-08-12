import React from 'react';
import { PageContainer } from 'src/components/PageContainer';
import { SectionContainer } from 'src/components/SectionContainer';
import { itemsData } from 'src/components/Bakery/items';
import EatItem from 'src/components/Bakery/EatItem';

function BakeryPage(props) {
  return (
    <PageContainer>
      <div className="mb-4">
        <div className="mb-2">
          <span className="text-9xl">Tiệm bánh 2ng6m</span>
        </div>
        <span className="text-2xl">😑 ▶ 🍰 ▶ 😋</span>
      </div>
      <SectionContainer>
        <div className="flex flex-row">
          {itemsData.map((eatItem) => {
            return <EatItem key={eatItem.name} {...eatItem} />;
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default BakeryPage;
