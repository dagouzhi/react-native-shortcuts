export interface PinnedShortcutConfig {
    id: string;
    icon: string;
    label: string;
    link: string;
}
declare class ShortcutsClass {
    AddPinnedShortcut(data: PinnedShortcutConfig): Promise<boolean>;
}
declare const _default: ShortcutsClass;
export default _default;
