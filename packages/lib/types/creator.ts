export type Creator = {
  username: string;
  description: string;
  bannerImageUrl: string;
  profileImageUrl: string;
  supporters: number;
  support: Support;
};

export type Support = {
  icon: string;
  item: string;
  defaults: number[];
  pricePerItem: number;
};
