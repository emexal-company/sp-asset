import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-asset.styles';
import template from './demo-asset.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

import Prism from "prismjs";

@customElement('demo-asset')
export class DemoAsset extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-asset': DemoAsset;
  }
}
