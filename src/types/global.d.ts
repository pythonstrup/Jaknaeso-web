export {};

declare global {
  interface Window {
    Kakao: any;
    AppleID: AppleId;
  }
}

interface AppleId {
  auth: {
    init: (params: { clientId: string; scope?: string; redirectURI: string; state: string; usePopup: boolean }) => void;
    signIn: () => Promise<{
      authorization: { id_token: string };
      user?: {
        name?: {
          firstName?: string;
          lastName?: string;
        };
      };
    }>;
  };
}
