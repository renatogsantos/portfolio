export type Plans = {
  id: number;
  title: string;
  price: number;
  time: number
  services: [{ title: string, type: boolean }];
};
