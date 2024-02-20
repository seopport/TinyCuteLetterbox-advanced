import React, {useEffect, useState} from 'react';
import LetterDetailView from 'components/Detail/LetterDetailView';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function LetterDetailPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    //useEffect가 실행된 후 컴포넌트 렌더링(보안을 위해)
    // 1. 브라우저 렌더링 -> useEffect 실행 -> isRendered = true -> 컴포넌트 렌더링됨
    setIsRendered(true);
  }, [isLoggedIn, navigate]);

  return (
    <>
      {isRendered ? (
        <>
          <LetterDetailView />
        </>
      ) : null}
    </>
  );
}

export default LetterDetailPage;
