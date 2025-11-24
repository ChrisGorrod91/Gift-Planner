export type PersonId = string;
export type GiftId = string;

export interface Person {
  id: PersonId;
  name: string;
  imageUri?: string;
  relationship?: string; // e.g. "Wife", "Dad", "Friend"
  notes?: string;
}

export interface GiftIdea {
  id: GiftId;
  personId: PersonId;
  title: string;
  description?: string;
  price?: number;
  currency?: string;
  storeName?: string;
  storeLocation?: string;   
  imageUri?: string; 
  purchased?: boolean;
  purchasedByUserId?: string;
  createdAt: string;
  updatedAt: string;
}
