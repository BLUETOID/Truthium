export interface Myth {
  id: string;
  title: string;
  mythText: string;
  factText: string;
  category: 'science' | 'health' | 'history' | 'technology' | 'environment';
  isFeatured: boolean;
  dateAdded: string;
  imageUrl: string;
}

export type ThemeMode = 'light' | 'dark';