import { useRef, useState } from 'react';
import { FirstDecendentModule } from 'src/types/firstDecendent';

interface FDModuleSearchProps {
  FDModule: FirstDecendentModule[];
  onSelectModule: (module: FirstDecendentModule) => void;
}

export const FDModuleSearch = (props: FDModuleSearchProps) => {
  const { FDModule, onSelectModule } = props;
  const [searchedModule, searchModule] = useState<FirstDecendentModule[]>([]);
  const timer = useRef<NodeJS.Timeout | undefined>();

  const onSearchModule = (text: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      const reg = new RegExp(`.*${text}.`, 'g');
      const searchedModule = FDModule.filter(module => reg.test(module.module_name));
      searchModule(searchedModule);
    }, 500);
  };
  return (
    <div>
      <input type='text' onChange={e => onSearchModule(e.target.value)} />
      {searchedModule.map(module => (
        <div
          key={module.module_id}
          onClick={() => {
            onSelectModule(module);
          }}
        >
          {module.module_name}
        </div>
      ))}
    </div>
  );
};
