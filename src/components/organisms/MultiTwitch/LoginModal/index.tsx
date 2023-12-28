import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { twitchOauthUrl } from 'src/const';
import { LocalStorageClient } from 'src/utills';
import { useRouter } from 'next/router';

const MultiTwitchLoginModalStyle = styled.div`
  position: fixed;

  z-index: 200;
  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 20vw;
    min-width: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    gap: 20px;

    h3 {
      color: #8546f9;
    }

    & > div {
      width: 100%;
      & > span {
        display: inline-block;
        font-size: 0.8rem;
        color: #8546f9;
        margin: 20px 0px;
      }

      & > * {
        margin-top: 10px;
      }
      label {
        p {
          margin-bottom: 10px;
        }
        input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #ccc;
          padding-bottom: 4px;
        }
      }

      .btn_container {
        display: Flex;
        justify-content: center;

        button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          background-color: #8546f9;
          color: #fff;
        }
      }
    }
  }
`;

export const MultiTwitchLoginModal = () => {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = async () => {
    if (userId === '') {
      alert('본인의 트위치 아이디를 입력해주세요');
      return;
    }

    LocalStorageClient.setItem('userId', userId);
    router.push(twitchOauthUrl);
  };

  return (
    <MultiTwitchLoginModalStyle id='login_modal'>
      <main>
        <h3>TMV Login</h3>
        <div>
          <span>트위치 로그인이 필요한 서비스입니다.</span>

          <label>
            <p>트위치 아이디</p>
            <input
              type='text'
              value={userId}
              onChange={onChangeUserId}
              placeholder='닉네임이 아닌 아이디를 입력해주세요'
            />
          </label>
          <div className='btn_container'>
            <button onClick={onClickLogin}>로그인 하기</button>
          </div>
        </div>
      </main>
    </MultiTwitchLoginModalStyle>
  );
};
