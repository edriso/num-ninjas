import { msg as ar } from './arabic';
import { msg as en } from './english';

/** Message bag type — matches the shape of arabic.ts / english.ts */
export interface Messages {
  welcome: string;
  welcomeBack: (name: string, emoji: string) => string;
  error: string;
  privateChatOnly: string;
  askRole: string;
  roleStudent: string;
  roleParent: string;
  askNickname: string;
  askNicknameShort: string;
  invalidNickname: string;
  askLevel: (name: string) => string;
  profileCreated: (name: string, levelEmoji: string, levelName: string) => string;
  whoIsPlaying: string;
  addChild: string;
  profileSwitched: (name: string, emoji: string) => string;
  noProfiles: string;
  maxProfiles: string;
  playersList: (players: string) => string;
  activeMarker: string;
  levelItem: (emoji: string, name: string, desc: string) => string;
  help: string;
  needProfile: string;
  languageCurrent: (lang: string) => string;
  languageChanged: (lang: string) => string;
  languagePrompt: string;
  nudgeOnboardingAbandoned: string;
  nudgeNeverEngaged: (name: string) => string;
  nudgeWentSilent: (name: string) => string;
}

const messages: Record<string, Messages> = { ar, en };

export function getMessages(locale: string): Messages {
  return messages[locale] || messages.ar;
}
