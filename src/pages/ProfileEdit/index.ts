import Block from '#utils/Block';
import template from './profile-edit.hbs';
import './styles.scss'

export class ProfileEditPage extends Block {

  render() {
    return this.compile(template, this.props);
  }

}
