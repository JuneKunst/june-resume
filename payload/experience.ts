import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Mine.is (차란)',
      positions: [
        {
          title: 'Frontend Engineer',
          startedAt: '2022-06',
          endedAt: '2025-08',
          descriptions: [
            '4개 프론트엔드 앱 동시 개발/운영 (Flutter 모바일, React 웹앱, 2개 WMS 시스템)',
            'Clean Architecture + BLoC 패턴 기반 대규모 아키텍처 설계',
            'Server-Driven UI (SDUI) 구현으로 배포 없는 실시간 UI 업데이트',
            '5개 환경 빌드 시스템 (dev/test/staging/alpha/prod) 구축',
            'Server-Driven UI Exhibition: 20+ 원격 구성으로 앱 배포 없는 실시간 기획전 업데이트',
            'Design System: 130개 재사용 컴포넌트 + Widgetbook 통합으로 개발 효율성 혁신',
            'WMS Full Supply Chain: 픽업→검수→포장→배송 End-to-End 물류 자동화 시스템',
            'React 웹앱 → Flutter(BloC) native 앱 전환 대규모 마이그레이션 및 4개 분석 플랫폼 통합',
            '개인화 추천 시스템 UI/UX 구현 (유사룩, 브랜드 팔로우)',
            '복합 결제 시스템 (포트원, 쿠폰, 포인트) 프론트엔드 개발',
            '실시간 재고 관리 및 상품 상태 추적 시스템 구현',
          ],
          skillKeywords: [
            'Flutter',
            'BLoC',
            'React',
            'TypeScript',
            'Clean Architecture',
            'Server-Driven UI',
            'PWA',
          ],
        },
      ],
    },
  ],
};

export default experience;
