import Block from '#utils/Block';
import template from './message.hbs';
import './styles.scss';

interface MessageProps {
  text: string,
  class?: string,
}

export default class Message extends Block {
  constructor(props: MessageProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
