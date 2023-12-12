import { ChangeEvent, useState } from 'react';
import { defaultAPI } from 'src/api/default';
import { ResponseDefaultAPIUtillCompare } from 'src/types/apis/default';

export const UtillViewer = () => {
  const [uploadFileData, setUploadFile] = useState<{
    fileA: File | undefined;
    fileB: File | undefined;
  }>({
    fileA: undefined,
    fileB: undefined
  });

  const [compareResult, setCompareResult] = useState<ResponseDefaultAPIUtillCompare | undefined>();

  const onUploadExcel = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadFile(state => ({
      ...state,
      [e.target.name === 'fileA' ? 'fileA' : 'fileB']:
        e.target.files !== null ? e.target.files[0] : undefined
    }));
  };

  const onCompareExcel = async () => {
    if (!Object.values(uploadFileData).every(file => Boolean(file))) {
      console.log('뭐가 없음');
      return;
    }

    const formData = new FormData();
    formData.append('file1', uploadFileData.fileA as File);
    formData.append('file2', uploadFileData.fileB as File);

    try {
      const result = await defaultAPI.utill.compare(formData);
      setCompareResult(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>엑셀파일 비교하기</p>
      <input
        type='file'
        name='fileA'
        onChange={onUploadExcel}
        accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
      />
      <input
        type='file'
        name='fileB'
        onChange={onUploadExcel}
        accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
      />
      <button onClick={onCompareExcel}>클릭</button>
      <div>
        {compareResult && (
          <div>
            {compareResult.different_values_data.map(data => (
              <div key={data[0]} style={{ display: 'flex', gap: 10 }}>
                <div>{data[0]}</div>
                <div> {data['1_left']}</div>
                <div> {data['1_right']}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
