import Block from '#utils/Block';
import template from './home.hbs';
import { render } from "#utils/render";

export class HomePage extends Block {
  constructor() {
    super({
      type: 'button',

      buttons: [
        {
          label: 'Error', onClick: () => {
            render('error');
          }
        },
        {
          label: 'Forbidden', onClick: () => {
            render('forbidden');
          }
        },
        {
          label: 'Signin', onClick: () => {
            render('signin');
          }
        },
        {
          label: 'Signup', onClick: () => {
            render('signup');
          }
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
