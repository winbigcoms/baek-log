import styled from 'styled-components';

import { BlockItemContainer, ModalContainer, SubmitButton } from 'src/components/atoms';
import { ImageBox, ModalHeader } from 'src/components/molecules';

import { useNewWrite } from 'src/Hooks';
import { useSearchParams } from 'next/navigation';

const ModalMain = styled.main`
  padding: 20px;
  min-height: calc(100% - 80px);
  height: 80%;
  overflow: auto;

  label {
    width: 80%;
    height: 30px;

    margin: 0px auto 15px;

    display: flex;
    justify-content: space-between;

    & > div {
      font-size: 25px;
    }

    input {
      width: 80%;
      padding-left: 5px;
      font-size: 18px;

      border: none;
      border-bottom: 1px solid #ccc;

      &:focus {
        border-bottom: 2px solid #aaa;
      }
    }
  }

  label:nth-child(5) {
    height: 180px;

    & > div:nth-child(2) {
      width: 80%;

      input {
        width: 1px;
        height: 1px;
        border: none;
      }
    }
  }
`;

interface CategoryHiddenModalProps {
  switchModalState: (state: boolean) => void;
  initValue?: string; // 이거로 수정 생성 구분
}

export const CategoryHiddenModal = (props: CategoryHiddenModalProps) => {
  const { switchModalState, initValue } = props;

  const router = useSearchParams();
  const category = router.get('category') || '';

  const {
    writeRefs,
    writeState,
    onChangeRef,
    onEnterKeyword,
    removeKeyword,
    uploadThumbnail,
    thumbnailPreview
  } = useNewWrite((category as string) || '');

  const closeModal = () => {
    switchModalState(false);
  };

  return (
    <ModalContainer>
      <ModalHeader onClose={closeModal} headerTitle={`${category} 히든 모달 - 글쓰기`} />
      <ModalMain>
        <div>
          <label>
            <div>타이틀</div>
            <input
              type='text'
              name='title'
              onChange={onChangeRef}
              defaultValue={writeRefs.title}
              placeholder='글의 타이틀을 입력해주세여'
            />
          </label>
          <label>
            <div>카테고리</div>
            <input type='text' disabled name='category' defaultValue={category} />
          </label>
          <label>
            <div>키워드</div>
            <input
              type='text'
              name='keyword'
              onKeyPress={onEnterKeyword}
              placeholder='키워드를 입력하고 엔터를 치세여'
            />
          </label>
          <BlockItemContainer removeKeyword={removeKeyword} blockItems={writeState.keywords} />
          <label>
            <div>썸네일</div>
            <div>
              {<ImageBox imgUrl={thumbnailPreview} />}
              <input
                type='file'
                name='thumbNail'
                accept='image/png, image/jpeg'
                onChange={e => {
                  uploadThumbnail(e);
                }}
              />
            </div>
          </label>
          <SubmitButton onClick={() => {}} text={initValue ? '수정' : '저장'} />
        </div>
      </ModalMain>
    </ModalContainer>
  );
};
