export const UploadThumbnail = () => {
  return (
    <label htmlFor='thumbNail'>
      <div>썸네일</div>
      <div>
        <input type='file' name='thumbNail' accept='image/png, image/jpeg, image/jpg' />
      </div>
    </label>
  );
};
