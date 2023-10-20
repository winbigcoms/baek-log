export interface Get_Follow_Channels_List {
  total: 0;
  data: Channel_Info[];
}
export interface Channel_Info {
  game_id: string;
  game_name: string; //게임 종류
  id: string;
  is_mature: false;
  language: string;
  started_at: string;
  tag_ids: [];
  tags: string[];
  thumbnail_url: string; // 스트리머 섬네일
  title: string;
  type: string;
  user_id: string; //  채널 아이디
  user_login: string;
  user_name: string; //스트리머명
  viewer_count: number; // 시청자수
}

export interface userInfo {
  id: string;
  login: string;
  display_name: string;
  created_at: string;
}
