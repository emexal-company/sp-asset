import { Base } from '@spectrum/sp-base';
export declare class Asset extends Base {
    static componentStyles: import("lit-element").CSSResult;
    src: string;
    image: boolean;
    folder: boolean;
    file: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-asset': Asset;
    }
}
