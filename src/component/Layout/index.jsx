import {
  LayoutWrapper,
  SidebarWrapper,
  ContentWrapper,
  TopbarWrapper,
  MainContentWrapper,
} from "./styled";

const Layout = (props) => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <SidebarWrapper>
        <div>sidebar</div>
      </SidebarWrapper>

      <ContentWrapper>
        <TopbarWrapper>Topbar</TopbarWrapper>
        <MainContentWrapper>{children}</MainContentWrapper>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
