import { ISkill } from '../component/skill/ISkill';

const frontendFramework: ISkill.Skill = {
  category: 'Frontend Framework & Language',
  items: [
    {
      title: 'Flutter',
      level: 3,
    },
    {
      title: 'React',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'JavaScript ES6+',
      level: 3,
    },
  ],
};

const stateManagement: ISkill.Skill = {
  category: 'State Management & Architecture',
  items: [
    {
      title: 'BLoC Pattern',
      level: 3,
    },
    {
      title: 'Recoil',
      level: 3,
    },
    {
      title: 'React Query',
      level: 3,
    },
    {
      title: 'Redux',
      level: 2,
    },
    {
      title: 'Clean Architecture',
      level: 3,
    },
    {
      title: 'MVVM',
      level: 2,
    },
  ],
};

const performance: ISkill.Skill = {
  category: 'Performance & Optimization',
  items: [
    {
      title: '가상화 (react-virtuoso)',
      level: 3,
    },
    {
      title: 'Bundle Splitting',
      level: 3,
    },
    {
      title: '이미지 최적화',
      level: 3,
    },
    {
      title: 'PWA',
      level: 2,
    },
    {
      title: 'Caching Strategy',
      level: 2,
    },
  ],
};

const development: ISkill.Skill = {
  category: 'Development & Collaboration',
  items: [
    {
      title: 'Git/GitHub',
      level: 3,
    },
    {
      title: 'CI/CD (Codemagic)',
      level: 3,
    },
    {
      title: 'Firebase',
      level: 3,
    },
    {
      title: 'Figma',
      level: 2,
    },
    {
      title: 'Storybook',
      level: 2,
    },
    {
      title: 'Widgetbook',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontendFramework, stateManagement, performance, development],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
