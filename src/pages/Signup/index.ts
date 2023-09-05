import Block from '#utils/Block';
import template from './signup.hbs';
import './styles.scss'

export class SignupPage extends Block {

  render() {
    return this.compile(template, this.props);
  }

}
