import { render } from "#utils/render";
import { registerComponent } from "#utils/registerComponent";

import ErrorLayout from '#layouts/ErrorLayout';
import NotSignedLayout from '#layouts/NotSignedLayout';
import ProfileLayout from '#layouts/ProfileLayout';

import Button from '#components/Button';
import Avatar from '#components/Avatar';
import Card from "#components/Card";
import Link from "#components/Link";
import Input from "#components/Input";
import Spacer from "#components/Spacer";
import Message from "#components/Message";
import ProfileField from "#components/ProfileField";

registerComponent('ErrorLayout', ErrorLayout);
registerComponent('NotSignedLayout', NotSignedLayout);
registerComponent('ProfileLayout', ProfileLayout);

registerComponent('Button', Button);
registerComponent('Avatar', Avatar);
registerComponent('Card', Card);
registerComponent('Link', Link);
registerComponent('Input', Input);
registerComponent('Spacer', Spacer);
registerComponent('Message', Message);
registerComponent('ProfileField', ProfileField);

window.addEventListener('DOMContentLoaded', () => {
  render('profile-edit-password');
});
