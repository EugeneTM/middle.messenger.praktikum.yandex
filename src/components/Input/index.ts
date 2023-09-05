import Block from '#utils/Block';
import template from './input.hbs';
import './styles.scss';

interface InputProps {
  id: string,
  type: string,
  value: string,
  placeholder: string,
  class?: string,
  onClick?: () => void;
  events: {
    click: () => void;
  };
}

function validateInput(): void {
  console.log("blurred");
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: validateInput
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
