import { motion } from 'motion/react';
import CalendarSection from '../components/calendar/CalendarSection';
import { COLORS } from '../constants';

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: COLORS.navy }}>
            협회 <span style={{ color: COLORS.gold }}>일정 안내</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            한국시니어교류협회와 함께하는 공식 포럼, 교육 특강, 실제 수익 사업 실무, 그리고 친목 소모임까지 모두 확인하실 수 있는 단일 캘린더입니다.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-slate-100">
            <CalendarSection />
          </div>
        </div>
      </section>
    </div>
  );
}
