import Block from '#utils/Block';
import template from './spacer.hbs';
import './styles.scss';

interface SpacerProps {
  class?: string,
}

export default class Spacer extends Block {
  constructor(props: SpacerProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
