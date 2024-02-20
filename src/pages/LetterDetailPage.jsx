import React, {useEffect, useState} from 'react';
import LetterDetailView from 'components/Detail/LetterDetailView';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function LetterDetailPage() {
  return (
    <>
      <LetterDetailView />
    </>
  );
}

export default LetterDetailPage;
