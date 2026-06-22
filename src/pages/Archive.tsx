import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../constants';
import { Landmark, Users, Store, GraduationCap } from 'lucide-react';

// Import the subcomponents representing the 4 modular program areas
import ForumComponent from './Project/Forum';
import ProjectComponent from './Project/Project';
import ShoppingComponent from './Project/Shopping';
import EducationComponent from './Project/Education';

export default function Archive() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'project';

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const tabs = [
    {
      id: 'forum',
      name: '비즈니스 포럼',
      description: '정기적인 비즈니스 포럼을 통해 회원 간 전문성을 교류하고 리더십을 강화합니다.',
      icon: Landmark,
      color: '#3a6182',
      component: <ForumComponent />,
    },
    {
      id: 'project',
      name: '소모임 프로젝트',
      description: '관심사 기반의 소모임 활동을 통해 자연스러운 관계 형성과 비즈니스 교류의 기회를 만듭니다.',
      icon: Users,
      color: '#98b7a5',
      component: <ProjectComponent />,
    },
    {
      id: 'shopping',
      name: '쇼핑몰',
      description: '회원들의 고품격 창작물과 서비스를 전람 전파하여 가임 시니어들의 수입화를 지원합니다.',
      icon: Store,
      color: '#D19D34',
      component: <ShoppingComponent />,
    },
    {
      id: 'education',
      name: 'AI · 마케팅 · 창업 교육',
      description: '생성형 AI 실무, 마케팅, 브랜드 설계창업 등 실제 성장을 지원하는 교육에 동참합니다.',
      icon: GraduationCap,
      color: '#d2833d',
      component: <EducationComponent />,
    },
  ];

  const activeTabInfo = tabs.find((t) => t.id === currentTab) || tabs[1];

  const handleTabChange = (id: string) => {
    setSearchParams({ tab: id });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Premium Unified Header Section */}
      <section className="pt-12 pb-6 md:pt-28 md:pb-16 px-4 md:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <span className="text-xs md:text-sm font-extrabold text-amber-600 tracking-wider uppercase block">
              KSEA CORE PROGRAMS
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight break-keep" style={{ color: COLORS.navy }}>
              우리 협회 프로그램
            </h1>
            <p className="text-sm md:text-lg text-slate-500 max-w-3xl leading-relaxed break-keep">
              {activeTabInfo.description}
            </p>
          </div>

          {/* Master 4-Tab Switcher - Fully Responsive Row of Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pt-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative p-4 md:p-6 rounded-2xl border text-left transition-all flex flex-col justify-between gap-4 cursor-pointer outline-none ${
                    isActive 
                      ? 'border-transparent shadow-md text-white' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs text-slate-800'
                  }`}
                  style={{
                    backgroundColor: isActive ? tab.color : undefined,
                  }}
                >
                  <div className="flex justify-between items-center w-full">
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-white/10' : 'bg-slate-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: isActive ? '#FFFFFF' : tab.color }} />
                    </div>
                  </div>

                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider block opacity-70 ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}>
                      {tab.id === 'forum' ? 'FORUM' : tab.id === 'project' ? 'PROJECT' : tab.id === 'shopping' ? 'COMMERCE' : 'EDUCATION'}
                    </span>
                    <h3 className="text-sm md:text-lg font-black leading-tight break-keep">
                      {tab.name}
                    </h3>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                      style={{ borderColor: tab.color, opacity: 0.15 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary Container with Fade/Animate transitions */}
      <main className="flex-grow pt-8 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {activeTabInfo.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
