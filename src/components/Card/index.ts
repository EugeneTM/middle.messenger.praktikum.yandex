import Block from "#utils/Block";
import template from "./card.hbs";
import './styles.scss';

interface CardProps {
  title: string,
  class?: string,
  // onClick?: () => void;
  // events: {
  //   click: () => void;
  // };
}

export default class Card extends Block {
  constructor(props: CardProps) {
    super({
      ...props,
      // events: {
      //   click: props.onClick
      // }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
