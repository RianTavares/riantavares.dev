declare global {
    interface NetworkInformation extends EventTarget {
      readonly type: string;
      readonly effectiveType: string;
    }
  
    interface Navigator {
      readonly connection?: NetworkInformation;
    }
  }
  
  export {};
  