import styled from 'styled-components';

export const Container = styled.div`
  width: min(1248px, calc(100% - 112px)); margin: 0 auto;
  @media (max-width: 900px) { width: calc(100% - 64px); }
  @media (max-width: 540px) { width: calc(100% - 40px); }
`;
export const Page = styled.section`
  padding: 72px 0 104px;
  @media (max-width: 700px) { padding: 44px 0 64px; }
`;
export const PageTitle = styled.h1`
  font-size: clamp(64px, 8vw, 108px); letter-spacing: -.02em; margin-bottom: 24px;
`;
export const Intro = styled.p`
  max-width: 650px; font-size: clamp(20px, 2vw, 24px); color: var(--secondary);
`;
export const SectionHeading = styled.h2`
  font-size: clamp(40px, 5vw, 62px); letter-spacing: -.015em;
`;
export const TextLink = styled.a`
  display: inline-flex; align-items: center; min-height: 44px;
  color: var(--cobalt); font-weight: 600; text-decoration-thickness: 1px;
  &:hover { color: var(--navy); text-decoration-thickness: 2px; }
`;
export const PrimaryLink = styled.a`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 24px; min-height: 48px; background: var(--cobalt);
  color: var(--white); font-weight: 600; text-decoration: none; border-radius: 3px;
  &:hover { background: var(--navy); color: var(--white); }
`;
export const Actions = styled.div`
  display: flex; flex-wrap: wrap; gap: 16px 28px; align-items: center;
`;
export const Stack = styled.p`
  color: var(--secondary); font-size: 16px; margin: 16px 0;
`;
export const ContentGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start;
  @media (max-width: 800px) { grid-template-columns: 1fr; gap: 32px; }
`;
export const Prose = styled.div`
  max-width: 720px;
  p + p { margin-top: 20px; }
  p { color: var(--secondary); }
  h2 { font-size: 38px; margin: 40px 0 16px; }
  ul { padding-left: 22px; margin: 16px 0 0; color: var(--secondary); }
  li + li { margin-top: 10px; }
`;
