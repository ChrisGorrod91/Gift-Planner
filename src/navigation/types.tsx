export type RootStackParamList = {
  Home: undefined;
  PeopleList: undefined;
  PersonDetail: { personId: string };
  GiftForm: { personId: string; giftId?: string }; // giftId optional for edit
  GiftDetail: { giftId: string };
  Settings: undefined;
};
