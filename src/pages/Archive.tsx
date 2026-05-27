import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { Search, Download, Briefcase, GraduationCap, Laptop, Palette, FileText, Users } from 'lucide-react';

export default function Archive() {
  const categories = [
    { id: 'mgmt', name: '경영 · 컨설팅', icon: Briefcase, color: COLORS.navy },
    { id: 'edu', name: '교육 · 인문', icon: GraduationCap, color: '#4F46E5' },
    { id: 'tech', name: '기술 · IT', icon: Laptop, color: '#0891B2' },
    { id: 'art', name: '예술 · 디자인 · 문화', icon: Palette, color: '#DB2777' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: COLORS.navy }}>
               세상을 바꾸는 <span style={{ color: COLORS.gold }}>시니어 전문가</span> 리스트
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              검증된 회원들의 전문 프로필과 역량 포트폴리오를 확인하실 수 있습니다. 
              시니어들의 지혜가 필요한 기업과 기관을 위해 투명하고 체계적인 아카이브를 제공합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
             {categories.map((cat) => (
                <button
                  key={cat.id}
                  className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-3 text-sm font-bold transition-all hover:border-navy hover:translate-y-[-2px]"
                  style={{ color: COLORS.navy }}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
             ))}
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 group hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-slate-400 group-hover:text-navy transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-slate-100 text-slate-500 uppercase">Verified</span>
                </div>
                <h3 className="text-xl font-bold mb-2">홍길동 전문가</h3>
                <p className="text-sm font-medium text-navy mb-4 opacity-70">IT 컨설팅 / 디지털 트랜스포메이션 전문</p>
                <div className="space-y-2 mb-8">
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    30년간의 기업 IT 전략 수립 및 시스템 구축 경험을 바탕으로, 중소기업의 디지털 전환 솔루션을 제안합니다.
                  </p>
                </div>
                <button className="w-full py-4 rounded-xl border border-slate-100 bg-slate-50 text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-navy group-hover:text-white transition-all">
                  포트폴리오 상세정보
                  <FileText className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[40px] p-12 md:p-20 text-center space-y-12 overflow-hidden relative" style={{ backgroundColor: COLORS.navy }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">전체 전문가 아카이브 리스트 다운로드</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              협회에 등록된 500여명의 분야별 전문가들의 핵심 정보를 담은 종합 PDF 파일을 다운로드하실 수 있습니다.
            </p>
            <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-navy font-bold text-lg transition-transform hover:scale-105 shadow-2xl">
              종합 아카이브 PDF 다운로드
              <Download className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
