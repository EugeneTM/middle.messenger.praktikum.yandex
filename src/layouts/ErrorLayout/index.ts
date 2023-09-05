import Block from "#utils/Block";
import template from "./errorLayout.hbs";

export default class ErrorLayout extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
