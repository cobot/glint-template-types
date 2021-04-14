import { FaIconComponent } from '@gavant/glint-template-types/types/@fortawesome/ember-fontawesome/fa-icon';
import { DidInsertModifier } from '@gavant/glint-template-types/types/ember-render-modifiers/did-insert';
import { DidUpdateModifier } from '@gavant/glint-template-types/types/ember-render-modifiers/did-update';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'did-insert': typeof DidInsertModifier;
        'did-update': typeof DidUpdateModifier;
        FaIcon: typeof FaIconComponent;
        'fa-icon': typeof FaIconComponent;
    }
}
