import { useCallback, useRef, useState } from 'react';
import { imgUploader } from 'src/utills';

import S3 from 'aws-sdk/clients/s3';

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

  const onChangeRef = (e: InputEvent) => {
    const { value, name } = e;

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
    const inputDatas = { ...writeRefs.current, ...WriteState };
    for (let writeRef in inputDatas) {
      if (Boolean(inputDatas[writeRef])) {
        return false;
      }
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
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      saveKeyword(e.target.value);
      e.target.value = '';
    }

    if (e.target.value.trim() === '') {
      e.target.value = '';
    }
  };

  const uploadThumbnail = useCallback(
    async (e: Event) => {
      if (typeof window !== 'undefined' && e.target.files[0]) {
        // const url = await imgUploader(e.target.files[0]);
        let filename = encodeURIComponent(file.name);
        let res = await fetch(`/api/imgupload?filename=${filename}&category=${category}`);
        let data = await res.json();

        const file = e.target.files[0];

        const s3 = new S3({
          accessKeyId: process.env.AWS_ACCESS_ID,
          secretAccessKey: process.env.AWS_ACCSES_PW,
          region: process.env.AWS_REGION
        });

        const nowDate = Date.now();

        const config = {
          ACL: 'public-read',
          Bucket: process.env.AWS_IMG_BUCKET,
          Body: file,
          ContentType: file.type,
          Key: `origin/${nowDate}_tumbnail`
        };

        const s3Upload = s3.upload(config);

        const thumbnailPreviewSrc = window.URL.createObjectURL(e.target.files[0]);

        setThumbnailPreview(thumbnailPreviewSrc);

        const result = await s3Upload.promise();
        console.log(result);
        return result.Location;
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
