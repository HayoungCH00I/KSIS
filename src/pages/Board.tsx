import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { ExternalLink, MessageCircle, Info, Mail, Phone, MapPin } from 'lucide-react';

export default function Community() {
  return (
    <div className="min-h-screen bg-white">
      {/* Community Section */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: COLORS.navy }}>
               우리의 소통 창구
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              매일의 소식, 소모임 활동, 실시간 공지사항은 <br className="hidden md:block" />
              공식 네이버 카페에서 더 가깝게 만나보실 수 있습니다.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 md:p-16 rounded-[40px] bg-slate-50 border border-slate-100 shadow-xl space-y-8 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl" />
             
             <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-3xl bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <span className="text-4xl font-black italic">N</span>
                </div>
             </div>
             
             <div className="space-y-4">
               <h2 className="text-2xl font-bold" style={{ color: COLORS.navy }}>한국시니어교류협회 공식 카페</h2>
               <p className="text-slate-500">회원 간의 자유로운 교류와 최신 정보를 공유하는 온라인 공간입니다.</p>
             </div>

             <a
                href="https://cafe.naver.com/ksis1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl hover:bg-slate-800"
                style={{ backgroundColor: COLORS.navy }}
              >
                네이버 카페 방문하기
                <ExternalLink className="w-5 h-5" />
              </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-6 md:py-32 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold" style={{ color: COLORS.navy }}>협회에 문의하기</h2>
              <p className="text-lg text-slate-600">
                협회 가입, 제휴 제안, 전문가 자문 요청 등 궁금하신 사항을 남겨주시면 <br />
                정성껏 안내해 드리겠습니다.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy font-bold">
                  <Mail className="w-5 h-5 whitespace-nowrap" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium text-slate-900">contact@ksea.org</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy font-bold">
                  <Phone className="w-5 h-5 whitespace-nowrap" />
                </div>
                <div className="space-y-1">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                   <p className="text-lg font-medium text-slate-900">02-XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy font-bold">
                  <MapPin className="w-5 h-5 whitespace-nowrap" />
                </div>
                <div className="space-y-1">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                   <p className="text-lg font-medium text-slate-900">서울특별시 영등포구 ... (상세 주소)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 space-y-6">
             <div className="space-y-2">
                <h3 className="text-xl font-bold" style={{ color: COLORS.navy }}>메시지 보내기</h3>
                <p className="text-sm text-slate-500">문의내용을 작성해주시면 확인 후 연락드리겠습니다.</p>
             </div>
             
             <div className="space-y-4">
                <input placeholder="성함 / 단체명" className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-navy/20" />
                <input placeholder="연락처" className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-navy/20" />
                <textarea rows={4} placeholder="문의하실 내용을 입력해주세요." className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none" />
                <button className="w-full py-5 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ backgroundColor: COLORS.navy }}>
                  문의 제출하기
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
