interface Stats {
  type: '치명' | '특화' | '신속' | '인내' | '숙련' | '최대 생명력' | '공격력';
  value: string;
}
export interface LOA_CHARACTER {
  ArmoryProfile: {
    CharacterImage: string;
    ExpeditionLevel: number;
    PvpGradeName: string;
    TownLevel: number;
    TownName: string;
    Title: string;
    GuildMemberGrade: null;
    GuildName: null;
    UsingSkillPoint: number;
    TotalSkillPoint: number;
    Stats: Stats[];
    ServerName: '실리안';
    CharacterName: '균의방패';
    CharacterLevel: 60;
    CharacterClassName: '워로드';
    ItemAvgLevel: '1,643.33';
    ItemMaxLevel: '1,643.33';
  };
}
