export interface ITopCard {
  header: string;
  sub_header: string;
  value: number;
}

export interface INewUser {
  id: string;
  picture: string;
  name: string;
  isActive: boolean;
  country: string;
  progress: number;
}

export interface IRecentOrder {
  id: string;
  name: string;
  product: string;
  delivery_date: string;
  status: string;
  tracking_no: string;
  shipping: boolean;
}

export interface IDashboardData {
  top_cards: ITopCard[];
  new_users: INewUser[];
  recent_orders: IRecentOrder[];
}
