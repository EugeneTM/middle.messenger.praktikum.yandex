import Block from '#utils/Block';
import template from './profileField.hbs';
import './styles.scss';

interface ProfileFieldProps {
  name: string,
  hint: string,
  type: string,
  value: string,
  placeholder: string,
  disabled?: boolean,
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
  constructor(props: ProfileFieldProps) {
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
