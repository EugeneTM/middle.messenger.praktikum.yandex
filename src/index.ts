import { render } from "#utils/render";
import { registerComponent } from "#utils/registerComponent";

import ErrorLayout from '#layouts/ErrorLayout';
import NotSignedLayout from '#layouts/NotSignedLayout';

import Button from '#components/Button';
import Card from "#components/Card";
import Link from "#components/Link";
import Input from "#components/Input";
import Spacer from "#components/Spacer";
import Message from "#components/Message";

registerComponent('ErrorLayout', ErrorLayout);
registerComponent('NotSignedLayout', NotSignedLayout);

registerComponent('Button', Button);
registerComponent('Card', Card);
registerComponent('Link', Link);
registerComponent('Input', Input);
registerComponent('Spacer', Spacer);
registerComponent('Message', Message);

window.addEventListener('DOMContentLoaded', () => {
  render('signin')
});
