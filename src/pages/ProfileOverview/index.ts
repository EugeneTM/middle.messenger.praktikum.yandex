import Block from '#utils/Block';
import template from './profile-overview.hbs';
import './styles.scss'

export class ProfileOverviewPage extends Block {

  render() {
    return this.compile(template, this.props);
  }

}
