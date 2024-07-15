'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FDModuleSearch } from 'src/components/organisms/FDModuleSearch';
import { FirstDecendentModule, SelectedFirstDecendentModule } from 'src/types/firstDecendent';
import styled from 'styled-components';

interface FirstDecendentModuleViewProps {
  moduleData: FirstDecendentModule[];
}

const FirstDecendentModuleViewStyle = styled.div`
  display: flex;
  height: 100vh;

  & > div {
    flex: 1;

    &:not(last-child) {
      border-right: 1px solid #000;
    }

    .module_container {
      padding: 10px;
      .module_header {
        display: flex;
        gap: 5px;

        .module_type_img {
          width: 50px;
          height: 50px;
          background-color: #313131;
          position: relative;
        }

        margin-bottom: 10px;

        .socket_upgrade {
          display: Flex;
          align-items: center;
          input {
            width: 1rem;
            height: 1rem;
            border: 1px solid #000;
          }
        }
      }

      .module_level {
        display: flex;
        gap: 5px;

        .module_level_btn {
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          border: 1px solid #000;
          cursor: pointer;
        }
      }
    }

    &.module_effects {
      padding: 10px;
      & > div {
        margin-bottom: 10px;
      }
    }
  }
`;

export const FirstDecendentModuleView = (props: FirstDecendentModuleViewProps) => {
  const { moduleData } = props;
  const [selectedModule, selectModule] = useState<SelectedFirstDecendentModule[]>([]);
  const [socketMax] = useState(40);

  const onSelectModule = (module: FirstDecendentModule) => {
    selectModule(state => [...state, { ...module, level: 0, socketUpgrade: false }]);
  };

  const onControlModuleLevel = (moduleId: string, option: -1 | 1) => {
    selectModule(modules =>
      modules.map(module => {
        if (module.module_id !== moduleId) return module;
        return { ...module, level: module.level + option };
      })
    );
  };

  const onControlModuleSocketUpgrade = (moduleId: string) => {
    selectModule(modules =>
      modules.map(module => {
        if (module.module_id !== moduleId) return module;
        return { ...module, socketUpgrade: !module.socketUpgrade };
      })
    );
  };
  console.log(selectedModule);

  return (
    <FirstDecendentModuleViewStyle>
      <FDModuleSearch FDModule={moduleData} onSelectModule={onSelectModule} />
      <div>
        <div>
          {selectedModule.reduce((acc, cur) => {
            return acc + cur.module_stat[cur.level].module_capacity;
          }, 0)}
          /{socketMax}
        </div>
        <div>
          {selectedModule.map(data => (
            <div key={data.module_id} className='module_container'>
              <div className='module_header'>
                <div className='module_type_img'>
                  <Image fill src={data.image_url} alt='모듈이미지' />
                </div>
                <div>
                  <div>{data.module_name}</div>
                  <label className='socket_upgrade'>
                    소켓 강화
                    <input
                      type='checkbox'
                      checked={data.socketUpgrade}
                      onChange={() => {
                        onControlModuleSocketUpgrade(data.module_id);
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className='module_body'>
                <div className='module_level'>
                  <div
                    role='button'
                    className='module_level_btn'
                    onClick={() => {
                      if (data.level === 0) return;
                      onControlModuleLevel(data.module_id, -1);
                    }}
                  >
                    -
                  </div>
                  <div>레벨: {data.level}</div>
                  <div
                    role='button'
                    className='module_level_btn'
                    onClick={() => {
                      if (data.level === data.module_stat.length - 1) return;
                      onControlModuleLevel(data.module_id, 1);
                    }}
                  >
                    +
                  </div>
                </div>
                <div>소켓: {data.module_stat[data.level].module_capacity}</div>
                <div>옵션: {data.module_stat[data.level].value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='module_effects'>
        {selectedModule.map(module => (
          <div key={module.module_id}>{module.module_stat[module.level].value}</div>
        ))}
      </div>
    </FirstDecendentModuleViewStyle>
  );
};
