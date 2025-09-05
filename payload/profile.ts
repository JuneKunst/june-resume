import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '권형중 (June)',
    small: 'Frontend Engineer',
  },
  contact: [
    {
      title: 'hjkwon9401@gmail.com',
      link: 'mailto:hjkwon9401@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-4679-5018',
      icon: faPhone,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/JuneKunst',
      icon: faGithub,
    },
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/hyeongjung-kwon-578aa11b5',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '',
  },
};

export default profile;
