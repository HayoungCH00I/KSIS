import { CalendarEvent } from './types';

export const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    date: '2026-06-13',
    title: '유튜브, AI, 창업.. 하나로 연결되는 시간',
    description: '한국시니어교류협회 6월 초청강연',
    category: 'education',
    time: '08:00 - 10:00',
    location: '한국시니어교류협회 사무실 (마포구 신촌로 200-1, 황금바늘빌딩 2층, 이대역에서 100m)',
    rsvps: ['한국시니어교류협회 회원및 추천동반인,일반인']
  },
  {
    id: '2',
    date: '2026-06-16',
    title: '바람이 전하는 노래- 우리세대의 기억과 위로',
    description: '6월 문화가 있는 날',
    category: 'other',
    time: '17:00 -',
    location: '메가박스 동대문 8관 (중구 장충단로 247굿모닝시티 9층, 동대문역사문화공원역(DDP) 14번 출구)',
    rsvps: ['한국시니어교류협회 회원, 추천동반인']
  },
  {
    id: '3',
    date: '2026-06-24',
    title: '북촌 한 바퀴 | 북촌, 책이 사는 골목',
    description: '2026 한국시니어교류협회 로컬교류분과 첫 모임',
    category: 'other',
    time: '15:00 - 18:00',
    location: '글로벌 스타트업 허브 타워 3층',
    rsvps: ['한국시니어교류협회 회원']
  }
];
