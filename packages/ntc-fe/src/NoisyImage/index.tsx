import { NoisyImageContainer } from './NoisyImage.styled';

export function NoisyImage(props: { imgUrl: string }) {
  return (
    <NoisyImageContainer
      className="background"
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '200px',
        height: '200px',
        background: '#89CFF0',
      }}
    >
      <img
        style={{
          objectFit: 'cover',
          position: 'absolute',
          width: 200,
          height: 200,
        }}
        src={props.imgUrl}
      />
    </NoisyImageContainer>
  );
}
