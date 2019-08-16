// Components

export interface ButtonProps {
  classes?: {
    wrapper?: string;
  };
  color?: object;
  disabled?: boolean;
  label?: string;
  noMargin?: string;
  onClick?: Function;
  secondaryColor?: string;
  variant?: string;
}

export const defaultProps = {
  classes: {
    wrapper: '',
  },
  color: 'red',
  disabled: false,
  noMargin: '',
  variant: 'classic',
};
