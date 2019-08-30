
export interface Breakpoint {
  XS: '600px';
  SM: '900px';
  MD: '1200px';
  LG: '1600px';
  XL: '2400px';
}

export const breakpoint: Breakpoint = {
  XS: '600px',
  SM: '900px',
  MD: '1200px',
  LG: '1600px',
  XL: '2400px',
};

interface ColorPropsItem {
  bg: string;
  color: string;
}

interface ColorsProps {
  header: ColorPropsItem;
}

export const colors: ColorsProps = {
  header: {
    bg: '#000000',
    color: '#ffffff'
  }
};
