import Block from '#utils/Block';
import template from './avatar.hbs';
import './styles.scss';

interface AvatarProps {
  picture: string;
  editable: boolean,
  url?: string,
  onClick?: () => void;
  events: {
    click: () => void;
  };
}

export default class Avatar extends Block {
  constructor(props: AvatarProps) {
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
