declare module '@ryuu-reinzz/button-helper' {
  export function sendButtons(sock: any, jid: string, content: any, options?: any): Promise<any>;
  export function sendInteractiveMessage(sock: any, jid: string, content: any, options?: any): Promise<any>;
  export function getButtonArgs(message: any): { tag: string; attrs: Record<string, string>; content?: any[] };
  export function getButtonType(message: any): 'list' | 'buttons' | 'native_flow' | null;
}
