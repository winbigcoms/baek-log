'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FDModuleSearch } from 'src/components/organisms/FDModuleSearch';
import { FirstDecendentModule, SelectedFirstDecendentModule } from 'src/types/firstDecendent';
import styled from 'styled-components';

interface FirstDecendentModuleViewProps {
  moduleData: FirstDecendentModule[];
}

const Container = styled.div`
  background-color: #1e1e1e;
  color: #fff;

  h2 {
    padding: 10px;
  }
`;

const FirstDecendentModuleViewStyle = styled.div`
  display: flex;
  height: calc(100vh - 48px);

  & > div {
    overflow-y: auto;

    padding: 10px;
    flex: 1;

    &:not(:last-child) {
      border-right: 1px solid #fff;
    }

    .section_title {
      margin-bottom: 10px;

      span {
        margin-right: 5px;
      }
    }

    .module_container {
      border-bottom: 1px solid #000;
      padding: 10px 0px;
      &:first-child {
        padding-top: 0px;
      }
      .module_header {
        display: flex;
        align-items: center;
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

          & > div {
            margin-left: 5px;
            width: 1rem;
            height: 1rem;
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
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
          border: 1px solid #fff;
          cursor: pointer;
        }

        .module_level_text {
          line-height: 1.5;
        }
      }

      .remove_btn {
        text-align: right;
      }
    }

    &.module_effects {
      & > div {
        margin-bottom: 10px;
      }
    }
  }
`;

export const FirstDecendentModuleView = (props: FirstDecendentModuleViewProps) => {
  const { moduleData } = props;
  const [selectedModule, selectModule] = useState<SelectedFirstDecendentModule[]>([]);

  const onSelectModule = (module: FirstDecendentModule) => {
    const isAlreadySelectModule = selectedModule.find(data => data.module_id === module.module_id);

    if (isAlreadySelectModule) return;
    selectModule(state => [...state, { ...module, level: 0, socketUpgrade: false }]);
  };

  const onRemoveModule = (moduleId: string) => {
    selectModule(state => state.filter(data => data.module_id !== moduleId));
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

  return (
    <Container>
      <h2>first decendent module maker</h2>
      <FirstDecendentModuleViewStyle>
        <div>
          <div className='section_title'>검색</div>
          <FDModuleSearch FDModule={moduleData} onSelectModule={onSelectModule} />
        </div>
        <div>
          <div className='section_title'>
            <span> 수용량</span>
            {selectedModule.reduce((acc, cur) => {
              const socketAmount = cur.module_stat[cur.level].module_capacity;
              const amount = cur.socketUpgrade ? Math.floor(socketAmount / 2) : socketAmount;
              return acc + amount;
            }, 0)}
          </div>
          <div>
            {selectedModule.map(data => (
              <div key={data.module_id} className='module_container'>
                <div className='module_header'>
                  <div className='module_type_img'>
                    <Image fill src={data.image_url} alt='모듈이미지' />
                  </div>
                  <div>
                    <div>
                      {data.module_name} / {data.module_class}
                    </div>
                    <div>{data.module_socket_type}</div>
                    <label className='socket_upgrade'>
                      소켓 강화
                      <div onClick={() => onControlModuleSocketUpgrade(data.module_id)}>
                        {data.socketUpgrade && <span>v</span>}
                      </div>
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
                    <div className='module_level_text'>레벨: {data.level}</div>
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
                  <div className='remove_btn' onClick={() => onRemoveModule(data.module_id)}>
                    제거
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='module_effects'>
          <div className='section_title'>최종 옵션</div>
          {selectedModule.map(module => (
            <div className='options' key={module.module_id}>
              {module.module_stat[module.level].value}
            </div>
          ))}
        </div>
      </FirstDecendentModuleViewStyle>
    </Container>
  );
};
