import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './asset.styles';
import standardTemplate from './asset.template';

@customElement('sp-asset')
export class Asset extends Base {
  public static componentStyles = labelStyles;

  @property({ type: String }) public src: string = '';
  @property({ type: Boolean }) public image: boolean = false;
  @property({ type: Boolean }) public folder: boolean = false;
  @property({ type: Boolean }) public file: boolean = false;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-asset': Asset;
  }
}
