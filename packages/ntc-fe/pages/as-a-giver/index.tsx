import React from 'react';
import { NoisyImagePageWrapper } from 'src/NoisyImage/NoisyImage.styled';

function AsAGiverPage(props) {
  return (
    <NoisyImagePageWrapper>
      <div className="background-as-a-page" />
      <div className="text-white text-xl">
        Less pains, more fruits for software engineers
      </div>
    </NoisyImagePageWrapper>
  );
}

export default AsAGiverPage;
