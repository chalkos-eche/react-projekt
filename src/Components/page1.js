import React from 'react';
import styled from 'styled-components'


// 레이아웃
// margin 0 auto;
// 데스크탑 레이아웃 1366px

// 1페이지

// 상단 컴포넌트
// ㄴ 네비게이션 컴포넌트
// ㄴ 로고 컴포넌트
// 메인 컴포넌트
// ㄴ 영역 2개
// ㄴㄴ 왼쪽 : 이미지
// ㄴㄴ 오른쪽 : 텍스트 / 타이틀 / 버튼


const Layout = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: tan;
`
const DesktopLayout = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  display: flex;
  flex-direction:column;
  
`;
const TopSide = styled.div`
  flex: 3 1 auto;
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  justify-content: center;
`
const LogoLayout = styled.div`
  flex: 2 1 0;
  width: 100%;
  height: 100%;
`;
const NavigationLayout = styled.div`
  width: 100%;
  height: 100%;
  flex: 6 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    background-color: #fff;
    padding: 0 40px;
  }
`;
const LoginLayout = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & div { 
    border-radius: 4px;
    border: 1px solid white;
    padding: 4px 10px;
  }
`
const MainLayout = styled.div`
  flex: 7 1 auto ;
  display: flex;
  justify-content: space-between;
  height: 100%;
`
const LeftLayout = styled.div`
  height: inherit;
  background-color: #fff;
  width: 46%;
`;

const RightLayout = styled.div`
  height: inherit;
  background-color: #fff;
  width: 46%;
`;

const Page1 = () => {
  return (
      <Layout>
        <DesktopLayout>
          <TopSide>
            <LogoLayout>
              <div>webPokemon</div>
            </LogoLayout>
            <NavigationLayout>
              <div>Pokémon Center</div>
              <div>Price</div>
            </NavigationLayout>
            <LoginLayout>
              <div>login</div>
            </LoginLayout>
          </TopSide>
          <MainLayout>

          <LeftLayout>
            <div>this is an image in Left screen</div>
          </LeftLayout>
          <RightLayout>
            <div>this is a right screen</div>
            <div>this is a title in right screen</div>
            <div>this is a subtitle in right screen</div>
            <div>this is a button in right screen</div>
          </RightLayout>
          </MainLayout>
        </DesktopLayout>
      </Layout>

  );
};

export default Page1;
