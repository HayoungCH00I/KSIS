import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../../constants';
import { Users, FileText, Calendar, MapPin, X, Landmark, GraduationCap } from 'lucide-react';

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.25 }}
      onClick={() => setSelectedForum(forum)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white p-8 rounded-[32px] shadow-sm border transition-all flex flex-col justify-between cursor-pointer"
      style={{
        borderColor: isHovered ? iconColor : '#F1F5F9',
        boxShadow: isHovered ? `0 20px 25px -5px ${iconColor}15, 0 8px 10px -6px ${iconColor}15` : undefined,
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
            style={{ 
              backgroundColor: isHovered ? `${iconColor}25` : `${iconColor}15`,
              transform: isHovered ? 'scale(1.05)' : 'none'
            }}
          >
            <Icon className="w-6 h-6" style={{ color: iconColor }} />
          </div>
          <span 
            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors duration-300"
            style={{ 
              backgroundColor: isHovered ? `${iconColor}15` : '#F1F5F9',
              color: isHovered ? iconColor : '#64748B'
            }}
          >
            {forum.categoryName}
          </span>
        </div>
        <h3 
          className="text-xl font-bold mb-2 leading-normal break-keep transition-colors duration-300"
          style={{ color: isHovered ? iconColor : '#002147' }}
        >
          {forum.name}
        </h3>
        <p 
          className="text-sm font-bold mb-4 transition-colors duration-300" 
          style={{ color: isHovered ? iconColor : COLORS.gold }}
        >
          {forum.specialty}
        </p>
        <p className="text-sm text-slate-500 leading-relaxed min-h-[72px] line-clamp-3 mb-8">
          {forum.desc}
        </p>
      </div>
      <button 
        className="w-full py-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300"
        style={{
          backgroundColor: isHovered ? iconColor : '#F8FAFC',
          borderColor: isHovered ? iconColor : '#F1F5F9',
          color: isHovered ? '#FFFFFF' : '#0F172A',
        }}
      >
        포럼 참관기 및 보기
        <FileText className="w-4 h-4" />
      </button>
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

  const forums = [
    {
      id: 1,
      name: '[6월 정기 비즈니스 포럼] AI 시대, 시니어의 새로운 하이브리드 리더십',
      category: 'regular',
      specialty: '김진원 박사 (전 글로벌 IT 디렉터)',
      desc: 'AI 마이크로 디지털 도구와 수십 년간 축적된 시니어 경륜을 융합하여 새로운 세대와의 협력을 이끄는 실전 비즈니스 가이드를 나눕니다.',
      categoryName: '비즈니스 네트워킹',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
      date: '2026.06.20',
      contentBlocks: [
        {
          type: 'text',
          text: '급변하는 인공지능(AI) 혁명의 시대에, 시니어 전문가들이 보유한 전통적인 비즈니스 가치와 완숙한 경영 노하우는 어떤 형태로 진화해야 할까요? \n이번 포럼에서는 AI 협력 실무 활용론을 기반으로, 밀레니얼/젠지 젊은 실업인 및 창업인 지식과 시니어의 지혜를 블렌딩하는 "하이브리드 리더십" 모델을 국내 최고 IT 전문가 김진원 박사의 생생한 현장 경험과 함께 제시해 드립니다.'
        },
        {
          type: 'heading',
          text: '핵심 배움 요소'
        },
        {
          type: 'quote',
          text: '1. AI 도구(Generative AI, Notion AI)를 활용한 의사결정 속도 단축\n2. 세대 격차를 극복하는 경험 전수형 메타 코칭 기술\n3. 현대적 협력 플랫폼을 위한 시니어 경륜 자산화 패러다임'
        },
        {
          type: 'text',
          text: '당일 현장에서는 다양한 파이프라인 개설 및 참가 시니어-주니어 소통 워크샵을 겸하는 가벼운 다과 교류 네트워킹 시간이 공식 준비되어 있습니다. 여러분의 커리어를 한 단계 높일 절호의 기회를 놓치지 마세요.'
        },
        {
          type: 'heading',
          text: '상세 일정 및 행사장 오시는 길'
        },
        {
          type: 'quote',
          text: '📌 일시: 2026년 6월 20일 토요일 오전 10:00 - 12:30\n📌 장소: 마포구 신촌로 200-1 황금바늘빌딩 2층 대포럼실 (이대역 5번 출구 앞)\n📌 참가대상: 한국시니어교류협회 정회원 및 초청 손님'
        }
      ]
    },
    {
      id: 2,
      name: '[7월 리더십 세미나] 경험 자산화 공익 비즈니스 모델 설계법',
      category: 'special',
      specialty: '이석우 대표 (사회적기업 리더)',
      desc: '단순한 친목이나 단기 계약을 넘어, 개인의 전문 지식을 반영구적인 공익형 비즈니스 플랫폼과 매칭하는 시스템 설계 방안을 연구합니다.',
      categoryName: '역량강화',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
      date: '2026.07.11',
      contentBlocks: [
        {
          type: 'text',
          text: '회원님들이 평생에 걸쳐 쌓아 오신 노하우를 세상에 가치 있게 환원하는 동시에 지식 자산으로서 인정받는 비즈니스 구조를 기획합니다.\n이석우 대표는 현대 사회의 문제들과 은퇴 시니어의 축적된 솔루션을 연결하여 영리와 공익을 모두 충족한 수십 개의 컨설팅 우수 사례들을 직접 주도해 왔습니다.'
        },
        {
          type: 'heading',
          text: '세미나 아젠다'
        },
        {
          type: 'text',
          text: '- 비영리 법인 협업 및 공공 과제 컨설팅 파트너 되기\n- 지산학(기업-대학-지역) 연계를 활용한 전문가 매칭 비즈니스 모델링\n- 자신만의 무형 노하우를 수식화하여 지적재산권(IP)으로 전환하는 전략'
        },
        {
          type: 'quote',
          text: '명예로운 활동에서 실질적인 경제적 지속성으로의 진입을 목표로 합니다. 함께 방향을 그리는 고밀도 협업 디자인 라운드테이블에 초대합니다.'
        }
      ]
    }
  ];

const categoryLabels: Record<string, string> = {
  regular: 'BUSINESS NETWORKING',
  special: 'CAPACITY BUILDING',
};

  const filteredForums = selectedCategory
    ? forums.filter((f) => f.category === selectedCategory)
    : forums;

  return (
    <div className="bg-slate-50 min-h-[500px]">
      {/* Category Cards */}
      <div className="flex flex-row items-center gap-2 overflow-x-auto pb-4 sm:pb-10 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-5 scrollbar-none">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`group rounded-full sm:rounded-2xl border px-4 py-2 sm:px-6 sm:pt-6 sm:pb-7 h-auto sm:h-[154px] flex flex-row sm:flex-col items-center sm:items-start justify-center sm:justify-start shrink-0 transition-all duration-300 cursor-pointer select-none ${
            selectedCategory === null
              ? 'bg-[#3a6182] text-white border-[#3a6182] shadow-sm sm:shadow-lg shadow-slate-300/60'
              : 'bg-white text-[#002147] border-slate-200 hover:border-[#3a6182] sm:hover:-translate-y-1'
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl hidden sm:flex items-center justify-center mb-5 transition-colors ${
              selectedCategory === null ? 'bg-white/15' : 'bg-slate-50'
            }`}
          >
             <Landmark
               className="w-6 h-6"
               style={{ color: selectedCategory === null ? '#FFFFFF' : '#3a6182' }}
             />
          </div>

          <div
            className={`text-[11px] font-extrabold tracking-wider uppercase mb-1 hidden sm:block ${
              selectedCategory === null ? 'text-white/70' : 'text-slate-400'
            }`}
          >
            ALL VIEWS
          </div>

          <div className="text-xs sm:text-lg font-extrabold leading-tight break-keep font-sans">전체 보기</div>
        </button>

        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(isActive ? null : cat.id)}
              className="group rounded-full sm:rounded-2xl border px-4 py-2 sm:px-6 sm:pt-6 sm:pb-7 h-auto sm:h-[154px] flex flex-row sm:flex-col items-center sm:items-start justify-center sm:justify-start shrink-0 transition-all duration-300 cursor-pointer sm:hover:-translate-y-1 select-none"
              style={{
                backgroundColor: isActive ? cat.color : '#FFFFFF',
                borderColor: isActive ? cat.color : '#E2E8F0',
                color: isActive ? '#FFFFFF' : COLORS.navy,
                boxShadow: isActive ? `0 12px 24px ${cat.color}20` : undefined,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl hidden sm:flex items-center justify-center mb-5 transition-colors"
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.16)' : `${cat.color}10`,
                }}
              >
                 <Icon
                  className="w-6 h-6"
                  style={{ color: isActive ? '#FFFFFF' : cat.color }}
                 />
              </div>

              <div
                className="text-[11px] font-extrabold tracking-wider uppercase mb-1 hidden sm:block"
                style={{ color: isActive ? 'rgba(255,255,255,0.72)' : '#CBD5E1' }}
              >
                {categoryLabels[cat.id]}
              </div>

              <div className="text-xs sm:text-lg font-extrabold leading-tight break-keep font-sans">{cat.name}</div>
            </button>
          );
        })}
      </div>

      {/* Grid Content */}
      <div className="mt-1.5 sm:mt-4">
        {/* Desktop/Tablet Grid */}
        <motion.div 
          layout
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredForums.map((forum) => (
              <ForumCard
                key={`desktop-${forum.id}`}
                forum={forum}
                categories={categories}
                setSelectedForum={setSelectedForum}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View */}
        <motion.div 
          layout
          className="block md:hidden divide-y divide-slate-100"
        >
          <AnimatePresence mode="popLayout">
            {filteredForums.map((forum) => {
              const catInfo = categories.find((c) => c.id === forum.category);
              const iconColor = catInfo ? catInfo.color : '#00a896';

              return (
                <motion.div
                  layout
                  key={`mobile-${forum.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setSelectedForum(forum)}
                  className="flex justify-between items-start py-5.5 cursor-pointer active:bg-slate-100/40 transition-colors gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span 
                      className="text-[11px] font-bold underline underline-offset-4 decoration-1 tracking-wider uppercase inline-block cursor-pointer"
                      style={{ color: iconColor, textDecorationColor: `${iconColor}50` }}
                    >
                      {forum.categoryName}
                    </span>
                    <h3 className="text-[15.5px] font-bold text-slate-900 leading-snug break-keep line-clamp-2 pt-0.5">
                      {forum.name}
                    </h3>
                    <p className="text-[12.5px] text-slate-500 leading-relaxed line-clamp-2 font-normal font-sans break-keep pt-0.5">
                      {forum.desc}
                    </p>
                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-slate-400 font-medium font-sans">
                      <span>{forum.specialty}</span>
                      <span>•</span>
                      <span>{forum.date}</span>
                    </div>
                  </div>

                  {forum.image && (
                    <div className="w-[76px] h-[76px] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-3xs self-center">
                      <img 
                        src={forum.image} 
                        alt={forum.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
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
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold tracking-widest bg-slate-100 text-slate-500 uppercase">
                        {selectedForum.categoryName}
                      </span>
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
                    <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest block">비즈니스 포럼</span>
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#002147] leading-snug break-keep">
                      {selectedForum.name}
                    </h3>
                  </div>

                  <hr className="border-slate-100" />
                  
                  <div className="flex items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100/80">
                    <div className="w-10 h-10 rounded-full bg-[#002147]/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#002147]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block tracking-wider uppercase">발표자 및 초청 위원</span>
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
