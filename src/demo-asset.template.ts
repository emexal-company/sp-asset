import { html } from 'lit-element';
import { DemoAsset } from './demo-asset.component';

import '@spectrum/sp-asset';
import '@spectrum/sp-container';


export default function template(this: DemoAsset) {
  return html`
  <sp-container>
    <sp-rule medium label="Image"></sp-rule>

    <sp-demo width="180" height="120">
        <pre><sp-asset image src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg"></sp-asset></pre>
    </sp-demo>

    <sp-rule medium label="File"></sp-rule>

    <sp-demo width="180" height="120">
        <pre><sp-asset file></sp-asset></pre>
    </sp-demo>

    <sp-rule medium label="Folder"></sp-rule>

    <sp-demo width="180" height="120">
        <pre><sp-asset folder></sp-asset></pre>
    </sp-demo>

  </sp-container>
  
  `;
  
}
