import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../../constants';
import { Users, FileText, Calendar, MapPin, X, Landmark, GraduationCap } from 'lucide-react';
import { forumsData } from './forum';

interface ForumCardProps {
  forum: any;
  categories: Array<{ id: string; name: string; icon: any; color: string }>;
  setSelectedForum: (forum: any) => void;
  key?: string;
}

function ForumCard({ forum, categories, setSelectedForum }: ForumCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const catInfo = categories.find((c) => c.id === forum.category);
  const Icon = catInfo ? catInfo.icon : Users;
  const iconColor = catInfo ? catInfo.color : '#64748B';

  return (
    <motion.div
      layout
      key={`desktop-${forum.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: 10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      onClick={() => setSelectedForum(forum)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-[24px] overflow-hidden border transition-all duration-300 flex flex-col sm:flex-row cursor-pointer group min-h-[220px]"
      style={{
        borderColor: isHovered ? iconColor : '#E2E8F0',
        boxShadow: isHovered 
          ? `0 16px 32px -8px ${iconColor}20, 0 4px 12px -3px ${iconColor}10` 
          : '0 4px 10px -2px rgba(15, 23, 42, 0.02), 0 2px 4px -1px rgba(15, 23, 42, 0.02)',
      }}
    >
      {/* 왼쪽에 4:3 비율 썸네일 */}
      {forum.image && (
        <div 
          className="w-full sm:w-[293px] relative overflow-hidden shrink-0 bg-slate-50 border-r border-slate-100"
          style={{ aspectRatio: '4/3' }}
        >
          <img 
            src={forum.image} 
            alt={forum.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      )}

      {/* 오른쪽에 제목(강조) / 진행자 이름 / 본문 설명 */}
      <div className="flex-1 p-6 md:p-7.5 flex flex-col justify-between min-w-0">
        <div className="space-y-3.5">
          <div className="flex items-center justify-end">
            <span className="text-[11px] text-slate-400 font-bold font-mono">
              {forum.date || '2026.06.20'}
            </span>
          </div>

          <div className="space-y-[11px]">
            {/* 제목(강조) */}
            <h3 
              className="text-xl md:text-[30px] font-black leading-snug break-keep transition-colors duration-300 text-slate-900 line-clamp-2"
              style={{ color: isHovered ? iconColor : '#002147' }}
            >
              {forum.name}
            </h3>

            {/* 작성자 이름 */}
            <p 
              className="text-xs md:text-[14px] font-extrabold transition-colors duration-300 flex items-center gap-1.5" 
              style={{ color: isHovered ? iconColor : COLORS.gold }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isHovered ? iconColor : COLORS.gold }} />
              작성자: {forum.specialty}
            </p>
          </div>
        </div>

        {/* 본문 설명과 더보기 버튼의 수평 정렬 (동일 y축 위치) */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* 본문 설명 */}
          <p className="flex-1 text-[13.5px] md:text-[14.5px] text-slate-500 leading-relaxed font-medium break-keep line-clamp-2 md:line-clamp-3">
            {forum.desc}
          </p>

          {/* 더보기 버튼 */}
          <div className="shrink-0 flex justify-end">
            <div 
              className="px-4.5 py-2.5 rounded-xl border text-xs font-black flex items-center gap-1.5 transition-all duration-300"
              style={{
                backgroundColor: isHovered ? iconColor : '#F8FAFC',
                borderColor: isHovered ? iconColor : '#E2E8F0',
                color: isHovered ? '#FFFFFF' : '#1E293B',
              }}
            >
              포럼 참관기 및 보기
              <FileText className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ForumComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedForum, setSelectedForum] = useState<any | null>(null);

  const categories = [
    { id: 'regular', name: '비즈니스 네트워킹', icon: Landmark, color: '#0d9488' },
    { id: 'special', name: '역량강화', icon: GraduationCap, color: '#7950F2' }
  ];

  const forums = forumsData;

const categoryLabels: Record<string, string> = {
  regular: 'BUSINESS NETWORKING',
  special: 'CAPACITY BUILDING',
};

  const filteredForums = forums;

  return (
    <div className="bg-slate-50 min-h-[500px]">

      {/* List Content */}
      <div className="mt-6 md:mt-8">
        {/* Unified Responsive 1-Column List View */}
        <motion.div 
          layout
          className="flex flex-col gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredForums.map((forum) => (
              <ForumCard
                key={String(forum.id)}
                forum={forum}
                categories={categories}
                setSelectedForum={setSelectedForum}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredForums.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            등록된 비즈니스 포럼 리스트가 존재하지 않습니다.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedForum && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedForum(null)}
              className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs"
            />
            
            <motion.div
              initial={
                window.innerWidth < 768 
                  ? { opacity: 0, y: "100%" } 
                  : { opacity: 0, scale: 0.96, y: 15 }
              }
              animate={
                window.innerWidth < 768 
                  ? { opacity: 1, y: 0 } 
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                window.innerWidth < 768 
                  ? { opacity: 0, y: "100%" } 
                  : { opacity: 0, scale: 0.96, y: 15 }
              }
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full md:max-w-3xl bg-white rounded-t-[32px] md:rounded-[32px] shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[92vh] md:max-h-[85vh]"
            >
              <div className="md:hidden flex justify-center py-3 shrink-0 bg-white">
                <div className="w-12 h-1 bg-slate-200 rounded-full" />
              </div>

              <div className="hidden md:block h-2 shrink-0" style={{ background: `linear-gradient(90deg, ${COLORS.navy} 0%, ${COLORS.gold} 100%)` }} />
              
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                {selectedForum.image && (
                  <div className="relative w-full h-48 sm:h-72 md:h-80 overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={selectedForum.image} 
                      alt={selectedForum.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    <button 
                      onClick={() => setSelectedForum(null)}
                      className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-slate-900/40 backdrop-blur-md text-white border border-white/20 hover:bg-slate-900/60 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="p-6 md:p-10 pt-4 md:pt-10 space-y-6 md:space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      {selectedForum.date && (
                        <span className="text-xs font-semibold text-slate-400 font-mono flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {selectedForum.date}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedForum(null)}
                      className={`${selectedForum.image ? 'hidden md:flex' : 'flex'} p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer`}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#002147] leading-snug break-keep">
                      {selectedForum.name}
                    </h3>
                  </div>

                  <hr className="border-slate-100" />
                  
                  <div className="flex items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100/80">

                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block tracking-wider uppercase">작성자</span>
                      <p className="text-sm font-extrabold text-[#002147]">{selectedForum.specialty}</p>
                    </div>
                  </div>

                  {/* Body Text Blocks */}
                  <div className="space-y-6">
                    {selectedForum.contentBlocks && (
                      <div className="space-y-8">
                        {selectedForum.contentBlocks.map((block: any, idx: number) => {
                          if (block.type === 'heading') {
                            return (
                              <h4 
                                key={idx} 
                                className="text-base md:text-xl font-extrabold text-[#002147] border-l-4 pl-3.5 md:pl-4 py-0.5 mt-8 first:mt-0"
                                style={{ borderColor: COLORS.gold }}
                              >
                                {block.text}
                              </h4>
                            );
                          }
                          if (block.type === 'text') {
                            return (
                              <p 
                                key={idx} 
                                className="text-slate-600 text-sm md:text-[15px] leading-relaxed md:leading-loose font-medium break-keep whitespace-pre-line"
                              >
                                {block.text}
                              </p>
                            );
                          }
                          if (block.type === 'quote') {
                            return (
                              <div 
                                key={idx}
                                className="my-6 p-5 md:p-7 rounded-3xl border-l-[5px] border-[#002147] text-slate-800 italic font-semibold text-xs md:text-sm leading-relaxed md:leading-loose bg-slate-50 whitespace-pre-line"
                              >
                                {block.text}
                              </div>
                            );
                          }
                          if (block.type === 'image') {
                            return (
                              <div key={idx} className="my-6 overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                                <img src={block.src} alt={block.alt || '강연 이미지'} className="w-full h-auto object-cover" />
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 shrink-0 flex items-center gap-4 pb-6 md:pb-6">
                <button 
                  onClick={() => setSelectedForum(null)}
                  className="w-full py-4 bg-[#002147] hover:bg-[#003366] text-white font-bold rounded-2xl transition-colors text-sm cursor-pointer shadow-md"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
