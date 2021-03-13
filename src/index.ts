import { NativeModules, Platform, Linking } from 'react-native';

const { Shortcuts } = NativeModules;

export interface PinnedShortcutConfig {
  id: string;
  icon: string;
  label: string;
  link: string;
}

class ShortcutsClass {
  async AddPinnedShortcut(data: PinnedShortcutConfig):Promise<boolean> {
    const query = {
      id: data.id,
      icon: data.icon,
      label: data.label,
      link: data.link,
    };
    return new Promise((resolve, reject) => {
      try {
        const os = Platform.OS;
        if (os === 'android') {
          Shortcuts.AddPinnedShortcut(query, (status: boolean) => {
            resolve(status);
          })
        }
        if (os === 'ios') {
          Linking.openURL(
            `https://oss.dagouzhi.com/assets/shortcut.html?appId=${query.id}&appName=${
              query?.label
            }&appIcon=${
              query?.icon ||
              `https://dummyimage.com/114x114/02adea&text=${query?.label}`
            }`,
          );
        }
      } catch (err) {
        reject(err);
      }
    })
    
  }
}

export default new ShortcutsClass();