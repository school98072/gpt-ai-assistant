import { MESSAGE_TYPE_TEMPLATE, TEMPLATE_TYPE_BUTTONS } from '../../services/line.js';
import Message from './message.js';

class Template extends Message {
  type = MESSAGE_TYPE_TEMPLATE;

  altText;

  template;

  constructor({
    text,
    actions,
  }) {
    super();
    this.altText = text;
    this.template = {
      type: TEMPLATE_TYPE_BUTTONS,
      text,
      actions,
    };
  }
}

export default Template;
