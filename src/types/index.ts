export interface Get_Follow_Chenels_List {
  total: 0;
  data: Chenel_Info[];
}
export interface Chenel_Info {
  broadcaster_id: string;
  broadcaster_login: string;
  broadcaster_name: string;
  followed_at: string;
}
