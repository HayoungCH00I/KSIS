import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../../constants';
import { BookOpen, Calendar, Mail, FileText, Award, Layers, X } from 'lucide-react';

export default function EducationComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<any | null>(null);

  const categories = [
    { id: 'digital', name: '디지털/AI', icon: BookOpen, color: COLORS.navy },
    { id: 'marketing', name: '마케팅/수익화', icon: Layers, color: '#4F46E5' },
    { id: 'all', name: '창업경영', icon: Award, color: '#0891B2' },
  ];

  const classes = [
    {
      id: 1,
      name: '[AI 아카데미] 시니어를 위한 생성형 AI 프롬프트 엔지니어링 실무',
      category: 'digital',
      specialty: '최현우 AI 솔루션 아키텍트 (전 카카오 팀장)',
      duration: '4주 과정 (매주 토요일)',
      desc: '복잡한 코딩 지식 없이도 ChatGPT, Claude 등 생성형 AI를 활용하여 일상 기획, 이메일 초안 작성, 발표자료 일러스트 생성 등 실물 비즈니스 도구를 연계 장악해 냅니다.',
      categoryName: '디지털 교육',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      date: '2026.06.14 대개강',
      contentBlocks: [
        {
          type: 'text',
          text: '기술의 속도에 당황하셨나요? 생성형 AI는 숙련된 시니어들의 논리적 정합성 및 문법적 깊이와 시너지를 낼 때 최고의 유용함을 보여줍니다.\n네잎클로버처럼 내 커리어를 지지해줄 최고의 AI 프롬프팅 스킬을 체계적으로 실습, 검증하는 완벽 입문 코스입니다.'
        },
        {
          type: 'heading',
          text: '매주 학습 커리큘럼'
        },
        {
          type: 'quote',
          text: '• 1주차: 생성형 AI 기본 프리스펙 및 명확한 프롬프트 규칙 실습\n• 2주차: 업무 생산성을 극대화시키는 프롬프트 템플릿 설계\n• 3주차: 프레젠테이션용 중소 규모 AI 그래픽 및 시각물 생성 가이드\n• 4주차: 블로그/SNS 배포용 콘텐츠 톤앤매너 튜닝 자동화 실전'
        },
        {
          type: 'text',
          text: '노트북 하나만 지참해 방문해 주시면 셰르파 역할을 해 줄 전문 멘토진이 일대일 밀착 코칭 및 수강 완료 라이선스 발급을 친절히 도와드립니다.'
        }
      ]
    },
    {
      id: 2,
      name: '[1인 매체 스쿨] 퍼스널 브랜딩을 위한 네이버 블로그 & 유튜브 개설',
      category: 'marketing',
      specialty: '정은아 매체 컨설팅 그룹 대표',
      duration: '6주 완료 (매주 목요일)',
      desc: '개인의 축적된 완숙 경륜 노하우를 글, 영상 콘텐츠로 포맷화하여 내 채널에 올리고, 진성 팬덤을 형성해 나가며 수익까지 창출해내는 1인 미디어 창작 핵심 워크숍.',
      categoryName: '마케팅 교육',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      date: '2026.06.28 개강',
      contentBlocks: [
        {
          type: 'text',
          text: '소규모 자본과 내 지식만으로 스스로 영향력 있는 미디어가 되는 기초 체력을 다집니다.\n네이버 블로그 알고리즘 지식부터 스마트폰 하나로 시작하는 고화질 유튜브 촬영 및 컷편집, 썸네일 핵심 제작 이론까지 현업 최고 미디어 대가가 체계적으로 설명합니다.'
        },
        {
          type: 'heading',
          text: '핵심 혜택'
        },
        {
          type: 'quote',
          text: '• 전 수강생 개인 브랜드 컨셉 튜닝 1회 무료 진단\n• 유튜브 편집용 유료 폰트 및 모션 소스 필수팩 평생 무료 제공\n• 협력 브랜드 마케터와의 일대일 채널 방향성 비즈니스 피칭 기회 부여'
        }
      ]
    }
  ];

  const filteredClasses = selectedCategory
    ? classes.filter((c) => c.category === selectedCategory)
    : classes;

  return (
    <div className="bg-slate-50 min-h-[500px]">
      {/* Category Chips */}
      <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-6 no-scrollbar">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`whitespace-nowrap px-3.5 py-2 md:px-6 md:py-3 rounded-full border transition-all md:hover:translate-y-[-2px] text-xs md:text-sm font-bold flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm ${
            selectedCategory === null
              ? 'bg-[#002147] text-white border-[#002147]'
              : 'bg-white text-[#002147] border-slate-200 hover:border-[#002147]'
          }`}
        >
          전체 보기
        </button>

        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(isActive ? null : cat.id)}
              className="whitespace-nowrap px-3.5 py-2 md:px-6 md:py-3 rounded-full border shadow-sm flex items-center gap-2 text-xs md:text-sm font-bold transition-all md:hover:translate-y-[-2px] cursor-pointer shrink-0"
              style={{
                backgroundColor: isActive ? cat.color : '#FFFFFF',
                color: isActive ? '#FFFFFF' : COLORS.navy,
                borderColor: isActive ? cat.color : '#E2E8F0',
              }}
            >
              <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Grid Content */}
      <div className="mt-4">
        {/* Desktop/Tablet Grid */}
        <motion.div 
          layout
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((clas) => {
              const catInfo = categories.find((c) => c.id === clas.category);
              const Icon = catInfo ? catInfo.icon : BookOpen;
              const iconColor = catInfo ? catInfo.color : '#64748B';

              return (
                <motion.div
                  layout
                  key={`desktop-${clas.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedClass(clas)}
                  className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 group hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${iconColor}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: iconColor }} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-slate-100 text-slate-500 uppercase">
                        {clas.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#002147] leading-normal break-keep">{clas.name}</h3>
                    <p className="text-sm font-bold mb-4" style={{ color: COLORS.gold }}>{clas.specialty}</p>
                    <p className="text-sm text-slate-500 leading-relaxed min-h-[72px] line-clamp-3 mb-8">
                      {clas.desc}
                    </p>
                  </div>
                  <button className="w-full py-4 rounded-xl border border-slate-100 bg-slate-50 text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-[#002147] group-hover:text-white transition-all">
                    상세 강의계획서 확인
                    <FileText className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View */}
        <motion.div 
          layout
          className="block md:hidden divide-y divide-slate-100"
        >
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((clas) => {
              const catInfo = categories.find((c) => c.id === clas.category);
              const iconColor = catInfo ? catInfo.color : '#00a896';

              return (
                <motion.div
                  layout
                  key={`mobile-${clas.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setSelectedClass(clas)}
                  className="flex justify-between items-start py-5.5 cursor-pointer active:bg-slate-100/40 transition-colors gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span 
                      className="text-[11px] font-bold underline underline-offset-4 decoration-1 tracking-wider uppercase inline-block text-[#4F46E5]"
                    >
                      {clas.categoryName}
                    </span>
                    <h3 className="text-[15.5px] font-bold text-slate-900 leading-snug break-keep line-clamp-2 pt-0.5">
                      {clas.name}
                    </h3>
                    <p className="text-[12.5px] text-slate-500 leading-relaxed line-clamp-2 font-normal font-sans break-keep pt-0.5">
                      {clas.desc}
                    </p>
                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-slate-400 font-medium font-sans">
                      <span>{clas.specialty}</span>
                      <span>•</span>
                      <span>{clas.duration}</span>
                    </div>
                  </div>

                  {clas.image && (
                    <div className="w-[76px] h-[76px] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-3xs self-center">
                      <img 
                        src={clas.image} 
                        alt={clas.name}
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

        {filteredClasses.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            해당 등급의 교육 과정이 존재하지 않습니다.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedClass && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClass(null)}
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
                {selectedClass.image && (
                  <div className="relative w-full h-48 sm:h-72 md:h-80 overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={selectedClass.image} 
                      alt={selectedClass.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    <button 
                      onClick={() => setSelectedClass(null)}
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
                        {selectedClass.categoryName}
                      </span>
                      {selectedClass.date && (
                        <span className="text-xs font-semibold text-slate-400 font-mono flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {selectedClass.date}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedClass(null)}
                      className={`${selectedClass.image ? 'hidden md:flex' : 'flex'} p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer`}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block">실무 역량개발 코스</span>
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#002147] leading-snug break-keep">
                      {selectedClass.name}
                    </h3>
                  </div>

                  <hr className="border-slate-100" />
                  
                  <div className="flex items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100/80">
                    <div className="w-10 h-10 rounded-full bg-[#002147]/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#002147]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block tracking-wider uppercase">대표 강사진 및 조교진</span>
                      <p className="text-sm font-extrabold text-[#002147]">{selectedClass.specialty}</p>
                    </div>
                  </div>

                  {/* Body Text Blocks */}
                  <div className="space-y-6">
                    {selectedClass.contentBlocks && (
                      <div className="space-y-8">
                        {selectedClass.contentBlocks.map((block: any, idx: number) => {
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
                  onClick={() => setSelectedClass(null)}
                  className="w-full py-4 bg-[#002147] hover:bg-[#003366] text-white font-bold rounded-2xl transition-colors text-sm cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  수강 신청 및 정정 상담 접수하기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
