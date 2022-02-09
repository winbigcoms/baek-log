import { Editor } from '@tinymce/tinymce-react';

interface EditorProps {
  height: number;
  onContentChange: (content: string) => void;
}

export const ContentsEditor = (props: EditorProps) => {
  const { height } = props;

  return (
    <Editor
      apiKey={process.env.EDITOR_KEY}
      onEditorChange={contents => onContentChange(contents)}
      init={{
        placeholder: '글을 써주세요!',
        height: height,
        resize: false,
        statusbar: false,
        menubar: false,
        plugins: 'image',
        toolbar:
          'udo redo | styleselect | bold italic | link image | alignleft aligncenter alignright alignjustify'
        // images_upload_handler: 이미지 업로드 로직
      }}
    />
  );
};
