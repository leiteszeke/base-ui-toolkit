// Dependencies
import styledComponents from 'styled-components';

export const ButtonWrapper = styledComponents<any>('button').attrs(props => ({
  className: props.classes,
  color: props.color,
  disabled: props.disabled,
  onClick: props.onClick,
}))`
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  outline: none;
  padding: 0 16px;
  text-transform: uppercase;
  font-family: 'Source Sans Pro';
  width: auto;

  ${ props => props.noMargin !== 'vertical' && props.noMargin !== 'horizontal' &&
    `
      &.no-margin-${ props.noMargin } {
        margin-${ props.noMargin }: 0;
        padding-${ props.noMargin }: 0;
      }
    `
  }

  &.no-margin-horizontal {
    margin-left: 0;
    margin-right: 0;
  }

  &.no-margin-vertical {
    margin-bottom: 0;
    margin-top: 0;
  }

  &:disabled {
    cursor: default;
  }
`;
