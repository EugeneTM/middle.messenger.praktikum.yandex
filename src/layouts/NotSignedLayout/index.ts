import Block from "#utils/Block";
import template from "./notSignedLayout.hbs";

export default class NotSignedLayout extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
