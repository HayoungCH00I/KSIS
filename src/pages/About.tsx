import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Greeting Section */}
      <section className="py-24 px-6 md:py-32" style={{ backgroundColor: COLORS.beige }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-1 bg-navy mx-auto"
            style={{ backgroundColor: COLORS.navy }}
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight" style={{ color: COLORS.navy }}>
            시니어의 경험은 <br />사회의 가장 고귀한 자산입니다
          </h1>
          <div className="space-y-6 text-xl text-slate-700 leading-loose text-center">
            <p>
              사단법인 한국시니어교류협회는 평생을 바쳐온 여러분의 전문성과 통찰이 은퇴와 동시에 사라지는 것이 아닌, 
              새로운 가치로 재탄생할 수 있는 터전을 마련합니다.
            </p>
            <p>
              우리는 개별 전문가들의 방대한 역량을 아카이빙하고 연결하여, 
              시니어가 주도하는 역동적인 제2의 삶과 지속 가능한 미래 사회를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="about-section" className="pt-24 pb-[78px] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8" style={{ marginBottom: '12px', letterSpacing: '0.05em' }}>
             <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200">
               <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.gold }} />
               <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Vision & Mission</span>
            </div>
            <h2 id="about-title" className="text-4xl font-bold" style={{ color: COLORS.navy, marginBottom: '50px' }}>지속 가능한 시니어 생태계 구축</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              우리는 시니어가 단순한 복지의 수혜자가 아닌, 지혜를 나누는 사회의 선도자로서 당당히 설 수 있는 세상을 꿈꿉니다.
            </p>
            
            <div className="grid gap-8 pt-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 shadow-sm">
                  <Eye className="w-6 h-6" style={{ color: COLORS.navy }} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold" style={{ color: COLORS.navy }}>Vision</h3>
                  <p className="text-slate-600">시니어 전문가의 사회 참여가 일상이 되는 선순환 생태계 조성</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 shadow-sm">
                  <Target className="w-6 h-6" style={{ color: COLORS.navy }} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold" style={{ color: COLORS.navy }}>Mission</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>시니어 역량 데이터베이스(Archive) 구축 및 고도화</li>
                    <li>맞춤형 세대 간/세대 내 지식 교류 프로그램 개발</li>
                    <li>시니어 전문성을 활용한 공공·민간 프로젝트 제안</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[60px] overflow-hidden aspect-[4/5] shadow-3xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Visionary Seniors" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
