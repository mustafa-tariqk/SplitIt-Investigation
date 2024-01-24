export interface IReceiptCategory {
    id?: number;
    name?: string;
  }
  
  export interface IReceiptItem {
    id?: number;
    title?: string;
    price?: number;
    paid?: boolean;
  }
  
  export interface IReceipt {
    id?: number;
    vendor?: string;
    image?: string;
    location?: ILocation;
    host?: IFirebaseUser;
    members?: IFirebaseUser[];
    items?: IReceiptItem[];
    total: number;
    subtotal: number;
    received: number;
    tax: number; 
    tip: number;
    timestamp?: number;
    onPress?: (event?: any) => void;
  }