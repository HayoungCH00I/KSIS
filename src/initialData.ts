import { CalendarEvent } from './types';

export const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    date: '2026-06-05',
    title: '시니어 비즈니스 정기 포럼',
    description: '2026년 상반기 시니어 비즈니스 활성화 및 산업 혁신을 위한 정기 세미나 및 교류 협력회',
    category: 'forum',
    time: '14:00 - 17:00',
    location: '서울특별시 여의도 중소기업중앙회 연회홀',
    rsvps: ['백승일(IT)', '김영희(교육)', '박민수(금융)']
  },
  {
    id: '2',
    date: '2026-06-12',
    title: '디지털 헬스케어 교육 특강',
    description: '시니어 세대를 위한 디지털 헬스케어 기술 트렌드 및 최신 마케팅 전략 교육',
    category: 'education',
    time: '10:00 - 12:00',
    location: 'KISIS 본사 대회의실',
    rsvps: ['정재선(의료)', '최영아(마케팅)']
  },
  {
    id: '3',
    date: '2026-06-19',
    title: '수익성 시니어 실무 세미나',
    description: '시니어 콘텐츠 창작 및 수익 창출 실무 워크숍 및 비즈니스 모델 구축',
    category: 'monetize',
    time: '15:00 - 18:00',
    location: '글로벌 스타트업 허브 타워 3층',
    rsvps: []
  },
  {
    id: '4',
    date: '2026-06-25',
    title: '회원 친목 및 상생 협력 소모임',
    description: '회원 간 네트워킹 구축 및 사업 협력 기회 모색을 위한 케이터링 소모임',
    category: 'other',
    time: '18:30 - 21:00',
    location: '강남 시니어 교류 허브 스튜디오',
    rsvps: ['이인철(제조)', '강수지(법률)']
  }
];
