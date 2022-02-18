import axios from 'axios';

export const checkHomeHiddenCommand = (command: string[]) => {
  const targetCommand = ['ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowDown'];

  for (let i = 0; i < command.length; i++) {
    if (command[i] !== targetCommand[i]) {
      return false;
    }
    if (i === targetCommand.length - 1) {
      return true;
    }
  }
};

export const checkCategoryHiddenCommand = (command: string[]) => {
  const targetCommand = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyA',
    'KeyB'
  ];

  for (let i = 0; i < command.length; i++) {
    if (command[i] !== targetCommand[i]) {
      return false;
    }
    if (i === targetCommand.length - 1) {
      return true;
    }
  }
};

export const imgUploader = (file: File, imgCategory = 'utill') => {
  const filename = encodeURIComponent(file.name);
  const paramCategory = encodeURIComponent(category);

  const { url } = await fetch(`/api/imgupload?filename=${filename}&category=${paramCategory}`).then(
    res => res.json()
  );

  await fetch(`${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type
    },
    body: file
  });

  const imgUrl = url.split('?')[0];

  return imgUrl;
};
