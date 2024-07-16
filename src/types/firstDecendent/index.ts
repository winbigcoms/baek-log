export interface FirstDecendentModule {
  module_name: string;
  module_id: string;
  image_url: string;
  module_type: null;
  module_tier: string;
  module_socket_type: string;
  module_class: string;
  module_stat: {
    level: number;
    module_capacity: number;
    value: string;
  }[];
}

export interface SelectedFirstDecendentModule extends FirstDecendentModule {
  level: number;
  socketUpgrade: boolean;
}
