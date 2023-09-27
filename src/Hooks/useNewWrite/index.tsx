import { FormEvent, KeyboardEvent, useCallback, useRef, useState } from 'react';
import { imgUploader } from 'src/utills';

interface WriteState {
  keywords: string[];
  thumbnail: null | File;
}

export const useNewWrite = (category: string) => {
  const writeRefs = useRef({
    title: '',
    category,
    contents: ''
  });

  const [writeState, setWriteState] = useState<WriteState>({
    keywords: [],
    thumbnail: null
  });

  const [thumbnailPreview, setThumbnailPreview] = useState('');

  const onChangeRef = (e: FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    writeRefs.current = {
      ...writeRefs.current,
      [name]: value
    };
  };

  const onChangeContents = (content: string) => {
    writeRefs.current = {
      ...writeRefs.current,
      contents: content
    };
  };

  const checkValidation = useCallback(() => {
    const inputDatas = { ...writeRefs.current, ...writeState };
    for (const writeRef in inputDatas) {
      return false;
    }
  }, [writeRefs.current]);

  const saveKeyword = (keyword: string) => {
    if (!writeState.keywords.includes(keyword)) {
      setWriteState(state => ({
        ...state,
        keywords: [...state.keywords, keyword]
      }));
    }
  };

  const removeKeyword = (keyword: string) => {
    const dubKeywords = [...writeState.keywords];

    const index = dubKeywords.indexOf(keyword);
    dubKeywords.splice(index, 1);

    setWriteState(state => ({
      ...state,
      keywords: dubKeywords
    }));
  };

  const onEnterKeyword = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
      saveKeyword(e.currentTarget.value);
      e.currentTarget.value = '';
    }

    if (e.currentTarget.value.trim() === '') {
      e.currentTarget.value = '';
    }
  };

  const uploadThumbnail = useCallback(
    async (e: Event) => {
      const file = (e.target as HTMLInputElement).files;
      if (typeof window !== 'undefined' && file) {
        try {
          const imgUrl = await imgUploader(file[0], category);
          setThumbnailPreview(imgUrl);
        } catch (err) {
          console.log(err);
        }
      }
    },
    [typeof window, writeState.thumbnail]
  );

  return {
    writeRefs: writeRefs.current,
    writeState,
    onChangeRef,
    checkValidation,
    onEnterKeyword,
    removeKeyword,
    uploadThumbnail,
    thumbnailPreview,
    onChangeContents
  };
};
