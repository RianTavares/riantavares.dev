export interface Demo {
    web?: boolean;
    webUrl?: string;
    android?: boolean;
    androidUrl?: string;
    ios?: boolean;
    iosUrl?: string;
  }

export interface DemoLinksProps {
  demo: Demo;
}