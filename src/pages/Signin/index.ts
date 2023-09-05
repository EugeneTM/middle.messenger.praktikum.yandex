import Block from '#utils/Block';
import template from './signin.hbs';
import './styles.scss'

export class SigninPage extends Block {

  render() {
    return this.compile(template, this.props);
  }

}
