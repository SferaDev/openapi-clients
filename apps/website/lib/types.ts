export interface Provider {
  id: string;
  name: string;
  packageName: string;
  version: string;
  usage: string;
  hasMcp?: boolean;
}
