export const BANKS = {
  KB: 'kb',
  SHINHAN: 'shinhan',
  HANA: 'hana',
  WOORI: 'woori',
} as const;

export type Bank = (typeof BANKS)[keyof typeof BANKS];

export const THEME_CONFIG = {
  currentBank: BANKS.SHINHAN, // Change this to switch themes: 'kb', 'shinhan', 'hana', 'woori'
} as const;
