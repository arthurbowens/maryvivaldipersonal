export interface NavItem {
  readonly label: string;
  readonly fragment: string;
}

export interface ServiceItem {
  readonly title: string;
  readonly description: string;
  readonly icon: 'target' | 'chart' | 'heart' | 'clock';
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}
