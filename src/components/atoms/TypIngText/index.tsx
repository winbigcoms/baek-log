import { useEffect, useState } from 'react';
import { stringSplit } from 'src/utills';

interface TypeingTextProps {
  typeStrings: string[];
}

export const TypeingText = (props: TypeingTextProps) => {
  const { typeStrings } = props;

  const [savedString, setSavedString] = useState('');
  const [autoTypingStr, setAutoTypingStr] = useState('');
  const [sentenceIdx, setSentenceIdx] = useState(0);

  useEffect(() => {
    const a = typeStrings.map(line => line.split('').map(str => stringSplit(str)));

    function autoType() {
      const target = a[sentenceIdx % a.length];
      let reSavedString = '';
      let renderTextIdx = 0;
      let renderLetterIdx = 0;

      const inter = setInterval(renderText, 150);

      function renderText() {
        if (!target[renderTextIdx]) {
          clearInterval(inter);
          renderTextIdx = 0;
          renderLetterIdx = 0;

          const remover = setInterval(removeAletter, 150);
          // @ts-expect-error
          function removeAletter() {
            if (reSavedString.length === 0) {
              clearInterval(remover);
              setSentenceIdx(idx => idx + 1);
            }

            const strArr = reSavedString.split('');
            strArr.pop();

            reSavedString = strArr.join('');
            setSavedString(reSavedString);
          }

          return;
        }

        const letterLength = target[renderTextIdx].length;
        const rendered = target[renderTextIdx][renderLetterIdx];

        if (renderLetterIdx === letterLength - 1) {
          setSavedString(current => current + rendered);
          setAutoTypingStr('');

          reSavedString = reSavedString + rendered;
          renderTextIdx++;
          renderLetterIdx = 0;
        } else {
          setAutoTypingStr(rendered);
          renderLetterIdx++;
        }
      }
    }

    autoType();
  }, [sentenceIdx]);

  return typeStrings ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '2rem'
      }}
    >
      {savedString}
      {autoTypingStr}
      <div className='introduce' />
    </div>
  ) : (
    <div className='introduce' />
  );
};
