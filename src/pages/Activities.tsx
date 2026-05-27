import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { Database, Network, BookOpen, ChevronRight } from 'lucide-react';

export default function Activities() {
  const pillars = [
    {
      title: '역량 아카이빙 프로젝트',
      subtitle: 'Competency Archiving',
      icon: Database,
      items: [
        '60초 자기소개 영상 제작 지원',
        '전문 분야별 디지털 포트폴리오 구축',
        '개인별 핵심 역량 지표화 및 관리',
        '전문직 프로필 사진 및 홍보물 제작'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: '정기 교류 & 네트워킹',
      subtitle: 'Networking & Exchange',
      icon: Network,
      items: [
        '월간 정기 교류회 및 오찬 모임',
        '분야별 융복합 협업 프로젝트 매칭',
        '시니어 리더십 포럼 개최',
        '소모임 및 동호회 활동 지원'
      ],
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: '교육 · 세미나 · 교육콘텐츠',
      subtitle: 'Education & Content',
      icon: BookOpen,
      items: [
        '디지털 도구 및 AI 활용 실무 교육',
        '시니어 강사 양성 과정 운영',
        '비즈니스 실행 역량 강화 세미나',
        '생애 설계 및 재무 컨설팅 교육'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e5381bb6e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-slate-50">
      <section className="pt-24 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: COLORS.navy }}>
             활동 <span style={{ color: COLORS.gold }}>하이라이트</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            한국시니어교류협회는 체계적인 아카이빙에서 지식 공유까지, 시니어들의 전문성이 빛날 수 있는 3가지 핵심 활동을 전개합니다.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`flex flex-col gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 text-gold font-bold tracking-widest text-xs uppercase">
                    <pillar.icon className="w-5 h-5" />
                    {pillar.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: COLORS.navy }}>{pillar.title}</h2>
                </div>
                
                <ul className="space-y-4">
                  {pillar.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 text-lg text-slate-600 group"
                    >
                      <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                        <ChevronRight className="w-3 h-3 group-hover:text-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl group">
                   <img 
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Stats */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
           {[
             { label: '누적 회원수', value: '1,200+' },
             { label: '아카이브 프로젝트', value: '500+' },
             { label: '월 평균 교류회', value: '12회' },
             { label: '협력 기관', value: '80+' }
           ].map((stat, i) => (
             <div key={i} className="text-center space-y-2">
               <div className="text-4xl font-bold" style={{ color: COLORS.navy }}>{stat.value}</div>
               <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
