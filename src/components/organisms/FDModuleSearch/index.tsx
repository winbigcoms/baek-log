import { useRef, useState } from 'react';
import { FirstDecendentModule } from 'src/types/firstDecendent';
import styled from 'styled-components';

interface FDModuleSearchProps {
  FDModule: FirstDecendentModule[];
  onSelectModule: (module: FirstDecendentModule) => void;
}

const FDModuleSearchStyle = styled.div`
  input  {
    width: 100%:
    height: 30px;
    text-indent: 0.5rem;
  }
  .result_module_container {
    .module {
      cursor: pointer;
      margin-bottom: 3px;
    }
  }
`;

export const FDModuleSearch = (props: FDModuleSearchProps) => {
  const { FDModule, onSelectModule } = props;
  const [searchedModule, searchModule] = useState<FirstDecendentModule[]>([]);
  const timer = useRef<NodeJS.Timeout | undefined>();

  const onSearchModule = (text: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (!text) return;
      const reg = new RegExp(`.*${text}.`, 'g');
      const searchedModule = FDModule.filter(module => reg.test(module.module_name));
      searchModule(searchedModule);
    }, 500);
  };

  return (
    <FDModuleSearchStyle>
      <input type='text' onChange={e => onSearchModule(e.target.value)} />
      <div className='result_module_container'>
        {searchedModule.map(module => (
          <div
            key={module.module_id}
            onClick={() => {
              onSelectModule(module);
            }}
            className='module'
          >
            {module.module_name}({module.module_class})
          </div>
        ))}
      </div>
    </FDModuleSearchStyle>
  );
};
