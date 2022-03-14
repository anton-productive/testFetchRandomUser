import React from 'react';
import styled from 'styled-components';
import {CircularProgress} from '@mui/material';

const Loader = () => {
    return (
        <Backdrop>
            <CircularProgress/>
        </Backdrop>
    );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.35);
`

export default Loader;
