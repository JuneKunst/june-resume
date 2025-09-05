import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '차란 Flutter 네이티브 앱 (Ver.2)',
      startedAt: '2024-12',
      endedAt: '2025-06',
      where: 'Mine.is (차란)',
      descriptions: [
        {
          content:
            'React 웹뷰 → Flutter 네이티브 대규모 마이그레이션 프로젝트',
        },
        {
          content:
            'WebView-Native 하이브리드 아키텍처 구현 및 멀티 플랫폼 환경 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'WebView-Native 하이브리드 아키텍처 구현 (20+ JavaScript 핸들러)' },
            { content: 'BLoC 패턴 기반 15개 서비스 계층 및 10개 Repository 설계' },
            { content: '멀티 Flavor 빌드 시스템으로 환경별 Firebase 프로젝트 분리' },
            { content: 'Codemagic CI/CD + Shorebird 도입으로 심사 없는 앱 업데이트 환경 구축' },
          ],
        },
      ],
    },
    {
      title: '차란 React 웹앱 (Ver.1)',
      startedAt: '2022-06',
      endedAt: '2024-12',
      where: 'Mine.is (차란)',
      descriptions: [
        {
          content:
            'MVP → 70만 사용자 성장을 이끈 초기 프론트엔드 개발',
        },
        {
          content:
            'React 18 + TypeScript 기반 대규모 SPA 아키텍처 설계 및 성능 최적화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'React 18 + TypeScript 기반 대규모 SPA 아키텍처 설계' },
            { content: 'Recoil + React Query 조합으로 30+ 전역 상태 최적화' },
            { content: 'Atomic Design 원칙 기반 100+ 컴포넌트 라이브러리 구축' },
            { content: 'Vite 빌드 시스템 및 Bundle Splitting으로 성능 최적화' },
          ],
        },
      ],
    },
    {
      title: 'CORE WMS (창고관리시스템)',
      startedAt: '2023-01',
      endedAt: '2024-06',
      where: 'Mine.is (차란)',
      descriptions: [
        {
          content:
            'B2B 물류 시스템 프론트엔드 전담 개발',
        },
        {
          content:
            'React 17 + Material-UI 5 기반 복잡한 비즈니스 로직 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'QR/바코드 스캐닝 시스템 및 실시간 상품 추적 UI 개발' },
            { content: '가상화 테이블 (react-virtuoso) 구현으로 대용량 데이터 렌더링 최적화' },
            { content: 'ZPL 프린터 연동 및 운송장 자동 생성 시스템 구축' },
          ],
        },
      ],
    },
  ],
};

export default project;
