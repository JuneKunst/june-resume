import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'MVP부터 누적 사용자 70만명 규모까지 성장한 중고 패션 이커머스 플랫폼을 3년간 개발한 프론트엔드 엔지니어입니다.',
    '멀티플랫폼 생태계 (Flutter 모바일앱, React 웹앱, WMS 관리자) 설계 및 구현 경험과 복잡한 이커머스 도메인의 기술적 도전을 해결하며 비즈니스 임팩트를 창출하는 것에 전문성을 가지고 있습니다.',
    'Tech Stack: Flutter (BLoC), React (TypeScript), PWA | Clean Architecture, Server-Driven UI, Multi-platform | 가상화, 캐싱, 이미지 최적화, Bundle splitting',
  ],
  sign: '권형중 (June)',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
