import Block from '#utils/Block';
import template from './link.hbs';
import './styles.scss';

interface LinkProps {
  url: string,
  text: string,
  class?: string,
  onClick?: () => void;
  events: {
    click: () => void;
  };
}

export default class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: props.onClick
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
