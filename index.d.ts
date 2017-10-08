import "./vue";
import * as UI from './keen-ui';

// `KeenUi` in `export = KeenUi` must be a namespace
// All available types are exported via this namespace
declare namespace KeenUi {
  export type UiButton = UI.UIButton;
}

// TS cannot merge imported class with namespace, declare a subclass to bypass
declare class KeenUi extends UI.KeenUI { }

export = KeenUi;
