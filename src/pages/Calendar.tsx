import { useState, useEffect, FormEvent } from 'react';
import { CalendarEvent } from '../types';
import { INITIAL_EVENTS } from '../initialData';
import { Calendar as CalendarIcon, Clock, MapPin, Check, Plus, X, Users } from 'lucide-react';

export default function CalendarSection() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpRole, setRsvpRole] = useState('');
  const [showRsvpSuccess, setShowRsvpSuccess] = useState(false);

  // Dynamic Year and Month State (Default to today's date)
  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(() => new Date().getMonth() + 1);

  // Dynamic calculations for start day offset and total days in month
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const startDayOffset = new Date(currentYear, currentMonth - 1, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('kisis_events');
    if (saved) {
      try {
        setEvents(JSON.parse(saved));
      } catch (e) {
        setEvents(INITIAL_EVENTS);
      }
    } else {
      setEvents(INITIAL_EVENTS);
    }
  }, []);

  const saveEvents = (newEvents: CalendarEvent[]) => {
    setEvents(newEvents);
    localStorage.setItem('kisis_events', JSON.stringify(newEvents));
    // Synced selected event if open
    if (selectedEvent) {
      const updated = newEvents.find((e) => e.id === selectedEvent.id);
      if (updated) setSelectedEvent(updated);
    }
  };

  const getEventForDay = (day: number) => {
    const dateStr = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return events.filter((e) => e.date === dateStr);
  };

  const handleRsvpSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !rsvpName.trim()) return;

    const formattedRsvp = rsvpRole.trim() ? `${rsvpName.trim()}(${rsvpRole.trim()})` : rsvpName.trim();
    
    // Check if duplicate
    if (selectedEvent.rsvps.includes(formattedRsvp)) {
      alert('이미 상기 성명으로 신청을 완료해주셨습니다.');
      return;
    }

    const updatedEvents = events.map((ev) => {
      if (ev.id === selectedEvent.id) {
        return {
          ...ev,
          rsvps: [...ev.rsvps, formattedRsvp],
        };
      }
      return ev;
    });

    saveEvents(updatedEvents);
    setRsvpName('');
    setRsvpRole('');
    setShowRsvpSuccess(true);
    setTimeout(() => setShowRsvpSuccess(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 1. Calendar Grid Visual (8/12 of space on large screen) */}
      <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs">
        {/* Centered header with prev/next buttons and select controls */}
        <div className="flex justify-center items-center mb-6 pb-4 border-b border-slate-100 relative">
          <div className="flex items-center gap-6">
            {/* Left triangle button */}
            <button
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-900 hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-center shadow-xs"
              title="이전 달"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 7l-5 5 5 5V7z" />
              </svg>
            </button>

            {/* Centered selector H3 */}
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 select-none tracking-tight">
              <span className="relative inline-block cursor-pointer bg-slate-50 hover:bg-blue-50 hover:text-blue-950 transition-all border border-slate-200/60 px-3 py-1.5 rounded-xl text-center">
                <select
                  value={currentYear}
                  onChange={(e) => setCurrentYear(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                >
                  {Array.from({ length: 15 }).map((_, i) => {
                    const yr = 2020 + i;
                    return <option key={yr} value={yr}>{yr}년</option>;
                  })}
                </select>
                {currentYear}년
              </span>
              <span className="relative inline-block cursor-pointer bg-slate-50 hover:bg-blue-50 hover:text-blue-950 transition-all border border-slate-200/60 px-3 py-1.5 rounded-xl text-center">
                <select
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                >
                  {Array.from({ length: 12 }).map((_, i) => {
                    const m = 1 + i;
                    return <option key={m} value={m}>{m}월</option>;
                  })}
                </select>
                {currentMonth}월
              </span>
              <span className="text-slate-800">일정표</span>
            </h3>

            {/* Right triangle button */}
            <button
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-900 hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-center shadow-xs"
              title="다음 달"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-slate-400 border-b border-slate-100 pb-2.5 mb-2">
          <div className="text-rose-500">일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div className="text-blue-900">토</div>
        </div>

        {/* Calendar days grid */}
        <div className="grid grid-cols-7 gap-2 min-h-[350px]">
          {/* Empty offset days leading to Monday */}
          {Array.from({ length: startDayOffset }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-slate-50/50 rounded-xl" />
          ))}

          {/* Valid Days in Month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const dayEvents = getEventForDay(dayNum);
            const today = new Date();
            const isToday = currentYear === today.getFullYear() && (currentMonth === today.getMonth() + 1) && dayNum === today.getDate();

            return (
              <div
                key={`day-${dayNum}`}
                className={`min-h-[70px] bg-white border rounded-xl p-1.5 flex flex-col justify-between transition-all select-none ${
                  dayEvents.length > 0
                    ? 'border-blue-900 bg-blue-50/10 cursor-pointer shadow-xs hover:bg-blue-50/20'
                    : 'border-slate-100 hover:bg-slate-50'
                } ${isToday ? 'ring-2 ring-indigo-500 ring-offset-1' : ''}`}
                onClick={() => {
                  if (dayEvents.length > 0) {
                    setSelectedEvent(dayEvents[0]);
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`text-xs font-black rounded-lg w-5 h-5 flex items-center justify-center ${
                      (dayNum + startDayOffset - 1) % 7 === 0 // Sunday
                        ? 'text-rose-500'
                        : (dayNum + startDayOffset - 1) % 7 === 6 // Saturday
                        ? 'text-blue-800'
                        : 'text-slate-600'
                    } ${isToday ? 'bg-indigo-500 text-white font-extrabold' : ''}`}
                  >
                    {dayNum}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
                  )}
                </div>

                {/* Event titles in grid day box */}
                <div className="mt-1 space-y-0.5">
                  {dayEvents.slice(0, 1).map((ev) => (
                    <div
                      key={ev.id}
                      className={`text-[9px] font-bold p-1 rounded-sm text-center leading-tight truncate ${
                        ev.category === 'forum'
                          ? 'bg-blue-900 text-white'
                          : ev.category === 'education'
                          ? 'bg-violet-600 text-white'
                          : ev.category === 'monetize'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-500 text-white'
                      }`}
                    >
                      {ev.title.slice(0, 7)}...
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Side Panel: Active events info & RSVP form (4/12 of space) */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        {/* Quick Lists with Categories */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs flex-1">
          <h4 className="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-4.5 rounded-full bg-blue-900 inline-block" />
            다가오는 교류 행사 리스트
          </h4>

          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {events.map((ev) => {
              const [yStr, mStr, dayStr] = ev.date.split('-');
              const isSelected = selectedEvent?.id === ev.id;

              return (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEvent(ev)}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-900/5 border-blue-900'
                      : 'bg-slate-50 border-slate-200/60 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md text-white bg-slate-400 flex items-center">
                      {Number(mStr)}월 {Number(dayStr)}일
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase ${
                      ev.category === 'forum'
                        ? 'bg-blue-50 text-blue-900'
                        : ev.category === 'education'
                        ? 'bg-violet-50 text-violet-900'
                        : ev.category === 'monetize'
                        ? 'bg-emerald-50 text-emerald-950'
                        : 'bg-amber-50 text-amber-900'
                    }`}>
                      {ev.category === 'forum' ? '정기 포럼' : ev.category === 'education' ? '교육 특강' : ev.category === 'monetize' ? '수익 실무' : '친목 소모임'}
                    </span>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm line-clamp-1 hover:text-blue-900">
                    {ev.title}
                  </h5>
                  <p className="text-slate-400 text-xs font-semibold mt-1 flex items-center gap-1">
                    <Clock size={11} /> {ev.time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Event Details with RSVP form inside */}
        {selectedEvent ? (
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg animate-in fade-in duration-250 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400">
                ACTIVE EVENT DETAILS
              </span>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-white/40 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <h4 className="text-lg font-black mt-2 leading-tight">
              {selectedEvent.title}
            </h4>
            <p className="text-white/70 text-xs font-semibold mt-3 leading-relaxed word-break:keep-all">
              {selectedEvent.description}
            </p>

            <div className="space-y-2 mt-4 pt-4 border-t border-white/10 text-xs text-white/80 font-semibold">
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-emerald-400 flex-none" />
                <span>{selectedEvent.date.split('-')[0]}년 {Number(selectedEvent.date.split('-')[1])}월 {Number(selectedEvent.date.split('-')[2])}일 • {selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-emerald-400 flex-none" />
                <span>장소: {selectedEvent.location}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Users size={13} className="text-emerald-400 flex-none mt-0.5" />
                <div>
                  <span className="block mb-1 font-extrabold text-white">참석 확정 시니어 ({selectedEvent.rsvps.length}명):</span>
                  {selectedEvent.rsvps.length === 0 ? (
                    <span className="text-white/40 italic">첫 신청자를 기다리고 있습니다.</span>
                  ) : (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedEvent.rsvps.map((name, idx) => (
                        <span key={idx} className="bg-white/10 text-[10px] px-2 py-0.5 rounded-md font-bold text-white">
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RSVP Form */}
            <form onSubmit={handleRsvpSubmit} className="mt-5.5 pt-4 border-t border-white/10 space-y-3">
              <span className="block text-[11px] font-black tracking-wider text-white/50">
                실시간 간편 동맹 참가 신청
              </span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="성명 (예: 백승일)"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  className="bg-white/10 select-none border border-white/10 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-400 text-white placeholder-white/40 font-bold"
                />
                <input
                  type="text"
                  placeholder="전문직종 (예: IT)"
                  value={rsvpRole}
                  onChange={(e) => setRsvpRole(e.target.value)}
                  className="bg-white/10 select-none border border-white/10 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-400 text-white placeholder-white/40 font-bold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Check size={14} />
                주말/포럼 참가 명단 등록
              </button>

              {showRsvpSuccess && (
                <p className="text-center text-[11px] text-emerald-400 font-bold animate-pulse">
                  ✓ 리스트 등록 및 좌석 매칭이 성공했습니다!
                </p>
              )}
            </form>
          </div>
        ) : (
          <div className="bg-slate-100/50 border border-dashed border-slate-300 rounded-3xl p-6 text-center flex flex-col items-center justify-center py-10 flex-1">
            <CalendarIcon size={32} className="text-slate-400 mb-2.5 animate-pulse" />
            <p className="text-slate-500 font-bold text-sm">일정을 맵핑하여 신청하기</p>
            <p className="text-slate-400 text-xs leading-relaxed mt-1 max-w-[200px]">
              좌측 달력에서 일정(푸른 테두리)을 선택하시면 간편 참가 등록 및 기수인단 신청 폼이 활성화됩니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
