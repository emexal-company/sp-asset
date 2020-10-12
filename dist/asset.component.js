import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './asset.styles';
import standardTemplate from './asset.template';
let Asset = class Asset extends Base {
    constructor() {
        super(...arguments);
        this.src = '';
        this.image = false;
        this.folder = false;
        this.file = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Asset.componentStyles = labelStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Asset.prototype, "src", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Asset.prototype, "image", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Asset.prototype, "folder", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Asset.prototype, "file", void 0);
Asset = __decorate([
    customElement('sp-asset')
], Asset);
export { Asset };
//# sourceMappingURL=asset.component.js.map