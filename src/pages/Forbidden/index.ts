import Block from '#utils/Block';
import template from './forbidden.hbs';

import './styles.scss'


export class ForbiddenPage extends Block {

  render() {
    return this.compile(template, this.props);
  }

}
