import Block from '#utils/Block';
import template from './profile-edit-password.hbs';
import './styles.scss'

export class ProfileEditPasswordPage extends Block {

  render() {
    return this.compile(template, this.props);
  }

}
