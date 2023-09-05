import Block from "#utils/Block";
import template from "./profileLayout.hbs";

export default class ProfileLayout extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
