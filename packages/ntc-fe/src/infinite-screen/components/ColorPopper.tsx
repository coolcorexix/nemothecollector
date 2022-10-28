import * as React from 'react';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled, Theme } from '@mui/system';
import { base01, base2, cyan, green, orange, violet } from 'src/theme/colors';

const StyledPopperDiv = styled('div')(
  ({ theme }: { theme: Theme }) => `
  position: relative;
  border-radius: 2px;
  padding: 0.5rem;
  border: 1px solid;
  background-color: ${base2};
  opacity: 1;
  margin: 0.25rem 0px;
  width: 256px;
  padding: 16px;
  z-index: 1000;
  display: flex;
`
);

const colorsToPick = [base2, cyan, green, violet, orange];

export default function ColorPopper(props: {
  setBackgroundColor: any;
  backgroundColor: any;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <div
          style={{
            backgroundColor: props.backgroundColor,
            border: `1px solid ${base01}`,
            width: 30,
            height: 30,
          }}
        ></div>
      </button>
      <PopperUnstyled
        style={{
          zIndex: 2,
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
      >
        <StyledPopperDiv>
          {colorsToPick.map((c) => (
            <div
              style={{
                backgroundColor: c,
                width: 30,
                height: 30,
              }}
              onClick={() => {
                props.setBackgroundColor(c);
              }}
              key={c}
            ></div>
          ))}
        </StyledPopperDiv>
      </PopperUnstyled>
    </div>
  );
}
