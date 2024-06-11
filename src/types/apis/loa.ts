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
    ServerName: string;
    CharacterName: string;
    CharacterLevel: 60;
    CharacterClassName: string;
    ItemAvgLevel: string;
    ItemMaxLevel: string;
  };
}
