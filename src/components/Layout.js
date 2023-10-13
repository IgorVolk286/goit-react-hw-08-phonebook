// import { styled } from 'styled-components';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export const LayOut = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

// export const Layout = styled.div`
//   width: 1200px;
//   margin-left: auto;
//   margin-right: auto;
//   border-radius: 6px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   padding: 10px;
//   background-color: #ffffcc;
// `;
