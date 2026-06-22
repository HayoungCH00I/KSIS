import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../../constants';
import { Soup, BookOpen, Compass, FileText, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

function GallerySlider({ images }: { images: Array<{ url: string; caption?: string }> }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full bg-slate-50 border border-slate-100 p-2.5 sm:p-4 rounded-[24px] shadow-3xs my-6 select-none">
      {/* Slider view container */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-100 flex items-center justify-center">
        {/* Active Image */}
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption || `갤러리 이미지 ${currentIndex + 1}`}
          className="w-full h-full object-contain object-center rounded-xl"
          referrerPolicy="no-referrer"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#002147] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
              aria-label="이전 이미지"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#002147] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
              aria-label="다음 이미지"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </>
        )}

        {/* Slide Counter Overlay */}
        <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white tracking-widest font-mono z-10 shadow-3xs">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Styled slide indicator dots (Caption removed) */}
      <div className="mt-3 text-center font-sans">
        {images.length > 1 && (
          <div className="flex justify-center items-center gap-1.5 pt-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-5 h-1.5 bg-[#002147]' 
                    : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`${idx + 1}번 이미지로 이동`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Community Food Culture custom WebP images
import foodculture1 from '../../images/project/community/foodculture/1.webp';
import foodculture2 from '../../images/project/community/foodculture/2.webp';
import foodculture3 from '../../images/project/community/foodculture/3.webp';
import foodculture4 from '../../images/project/community/foodculture/4.webp';
import foodculture5 from '../../images/project/community/foodculture/5.webp';
import foodculture6 from '../../images/project/community/foodculture/6.webp';
import foodculture7 from '../../images/project/community/foodculture/7.webp';
import foodculture8 from '../../images/project/community/foodculture/8.webp';
import foodculture9 from '../../images/project/community/foodculture/9.webp';
import foodculture10 from '../../images/project/community/foodculture/10.webp';
import foodculture11 from '../../images/project/community/foodculture/11.webp';
import foodculture12 from '../../images/project/community/foodculture/12.webp';
import foodculture13 from '../../images/project/community/foodculture/13.webp';
import foodculture14 from '../../images/project/community/foodculture/14.webp';
import foodculture15 from '../../images/project/community/foodculture/15.webp';
import foodculture16 from '../../images/project/community/foodculture/16.webp';
import foodculture17 from '../../images/project/community/foodculture/17.webp';
import foodculture18 from '../../images/project/community/foodculture/18.webp';
import foodculture19 from '../../images/project/community/foodculture/19.webp';
import foodculture20 from '../../images/project/community/foodculture/20.webp';
import foodculture21 from '../../images/project/community/foodculture/21.webp';
import foodculture22 from '../../images/project/community/foodculture/22.webp';
import foodculture23 from '../../images/project/community/foodculture/23.webp';

// Community Local custom WebP images
import local1 from '../../images/project/community/local/1.webp';
import local2 from '../../images/project/community/local/2.webp';
import local3 from '../../images/project/community/local/3.webp';
import local4 from '../../images/project/community/local/4.webp';

// Community Bookclub custom WebP images
import bookclub1 from '../../images/project/community/bookclub/1.webp';

interface ExpertCardProps {
  exp: any;
  categories: Array<{ id: string; name: string; icon: any; color: string }>;
  setSelectedExpert: (exp: any) => void;
  key?: string;
}

function ExpertCard({ exp, categories, setSelectedExpert }: ExpertCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const catInfo = categories.find((c) => c.id === exp.category);
  const Icon = catInfo ? catInfo.icon : Users;
  const iconColor = catInfo ? catInfo.color : '#64748B';

  return (
    <motion.div
      layout
      key={`desktop-${exp.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.25 }}
      onClick={() => setSelectedExpert(exp)}
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
            <Icon className="w-6 h-6 animate-none" style={{ color: iconColor }} />
          </div>
          <span 
            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors duration-300"
            style={{ 
              backgroundColor: isHovered ? `${iconColor}15` : '#F1F5F9',
              color: isHovered ? iconColor : '#64748B'
            }}
          >
            {exp.categoryName}
          </span>
        </div>
        <h3 
          className="text-xl font-bold mb-2 leading-normal break-keep transition-colors duration-300"
          style={{ color: isHovered ? iconColor : '#002147' }}
        >
          {exp.name}
        </h3>
        <p 
          className="text-sm font-bold mb-4 transition-colors duration-300" 
          style={{ color: isHovered ? iconColor : COLORS.gold }}
        >
          {exp.specialty}
        </p>
        <p className="text-sm text-slate-500 leading-relaxed min-h-[72px] line-clamp-3 mb-8">
          {exp.desc}
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
        더보기
        <FileText className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export default function ProjectComponent({
  selectedCategory: propCategory,
  setSelectedCategory: propSetSelectedCategory
}: {
  selectedCategory?: string | null;
  setSelectedCategory?: (cat: string | null) => void;
}) {
  const [internalCategory, setInternalCategory] = useState<string | null>(null);
  const selectedCategory = propCategory !== undefined ? propCategory : internalCategory;
  const setSelectedCategory = propSetSelectedCategory || setInternalCategory;
  const [selectedExpert, setSelectedExpert] = useState<any | null>(null);

  const categories = [
    { id: 'food', name: '식문화', icon: Soup, color: '#98b7a5' },
    { id: 'book', name: '북클럽', icon: BookOpen, color: '#D19D34' },
    { id: 'local', name: '로컬탐방', icon: Compass, color: '#d2833d' },
  ];

  const experts = [
    {
      id: 1,
      name: '인천 연수구 청량산 문화체험원에서 산마늘 명이나물 재우며, 식문화 비빔밥을 해 먹다',
      category: 'food',
      specialty: '원동업 성수동편집장',
      desc: '제철에 만나는 건강한 식재료를 함께 활용하여 요리하고 시식하며, 일상의 맛있는 지혜와 따뜻한 대화를 공유하는 모임입니다.',
      categoryName: '식문화',
      image: foodculture1,
      date: '2026.06.12',
      contentBlocks: [
        {
          type: 'text',
          text: `인천에 갔습니다. 인천광역시립박물관에 먼저 들렀어요. 박물관엔 중화루를 장식했던 북경요리전문 중화요리점의 2층 창문을 장식했던 간판이었답니다. 먹거리는 인간들의 삶에서 가장 보편적이고 필수적인 부분을 이룹니다. \n옛부터 인천도 농사를 짓고, 물고기를 잡는 그러한 땅이었습니다. \n인천은 미추홀이라고 고구려 시대에 불렸고, 제물포항은 현대 인전의 옛 고을이었죠. 제물포항은 외국과의 교류 지역이기도 해서 많은 외국 문화가 들어오는, 나가는 관문이었습니다. 커피 가는 저 분쇄기와 뜨거운 물 나오는 통은 현재의 모습과 여전히 같습니다.`
        },
        {
          type: 'heading',
          text: '인천광역시립박물관'
        },
        {
          type: 'gallery',
          cols: 2,
          aspectRatio: 'match-height',
          images: [
            {
              url: foodculture2,
              caption: '산마늘 명이나물 잎새 손질'
            },
            {
              url: foodculture3,
              caption: '장아찌용 특제 양념 간장 제조'
            },
            {
              url: foodculture4,
              caption: '전통 나무 농기구 전시'
            },
            {
              url: foodculture5,
              caption: '고대 소형 나무 모형 배'
            },
          ]
        },
        {
          type: 'text',
          text: '인천에선 현재 강화도조약 150주년 기획특별전이 벌어지고 있군요. 그동안 벌어졌던 인천의 특별기획전은 다음과 같습니다.'
        },
        {
          type: 'gallery',
          cols: 3,
          images: [
            {
              url: foodculture6,
              caption: '민속 주방 기구와 옛 기물'
            },
             {
              url: foodculture7,
              caption: '문화체험원 계단 포토월 및 포스터 전시'
            },
            {
              url: foodculture8,
              caption: '로컬 히스토리 프레임 액자 갤러리'
            },
            {
              url: foodculture9,
              caption: '비법 전수 - SNS 및 특급 소스 비법 공개 공식 오리엔테이션 배너'
            }
          ]
        },
        {
          type: 'text',
          text: '그리고 오늘 우리의 행사를 시작합니다. 식문화교류분과 첫번째 모임입니다. 인천 연수구 청량숲 문화체험원 2층에 음식을 만들고 나눌 수 있는 공간이 있습니다. 옆에는 숲이 있는데, 이 멋진 공간에서 이 멋진 행사를 진행합니다. 지난 4월 7일 개관한 이곳 청량숲 문화체험원의 첫 외부행사라고도 합니다.'
        },
        {
          type: 'text',
          text: '오늘은 명이나물을 만듭니다. 명이나물을 한번 씻고, 소금물에 데치고(줄기 부분 넣고 하나둘셋 세고, 잎을 넣어서 한번 뒤집어 바로 빼기), 찬물에 헹궈서, 물을 짜내고 빼내고, 음식통에 담아서, 간장을 붓는 겁니다. 설탕도 들어가고, 식초도 들어가고, 물과 간장도 들어갑니다. 저는 비율을 각 1대 1대 1대 1로 하는데, 소주를 약간 0.5정도 넣는 분도 있다고 합니다. 우리의 작업에서 비율은 1대 1대 2대 2. 그리고 마늘(통마늘)과 홍고추 청고추 적당량.'
        },
        {
          type: 'gallery',
          cols: 3,
          images: [
            {
              url: foodculture10,
              caption: '환하고 넓은 쿠킹스튜디오 교실 내부 전경'
            },
            {
              url: foodculture11,
              caption: '강사님의 비빔밥 배합 비율 시연'
            },
            {
              url: foodculture12,
              caption: '강의 팜플렛 서명 및 출석 작성 과정'
            },
            {
              url: foodculture13,
              caption: '청량산 텃밭에서 바로 따온 생 싱그러운 채소들'
            },
            {
              url: foodculture14,
              caption: '회원들이 함께 둘러앉아 재료 손질'
            },
            {
              url: foodculture15,
              caption: '나물을 흐르는 깨끗한 정제수에 살살 세척'
            },
            {
              url: foodculture16,
              caption: '풍부하고 향긋한 식감의 양념 소스 첨가'
            },
            {
              url: foodculture17,
              caption: '색색의 계절 가루와 신선 야채 고명 플레이팅'
            }
          ]
        },
        {
          type: 'text',
          text: '명이나물 장아찌를 다 담그고, 이선진 대표님의 새공간으로 찾아갔습니다. 이전에 짱뚱이어린이도서관이 있던 곳이라지요? 꿈수레 힐링원예공방도 있고요. [주소 : 인천 연수구 계림로 112번길 25] 산으로 이어지는 청량한 곳에서, 너른 주차장을 앞에 둘만한 공간이었습니다. 앞뒤로 뻥 뚫려서 시원했고요. "1층이라서 참 좋아요!" 하셨죠. 이전에 어니스트푸드케이의 공간은 100평 넓은 데였고  카페도 있고, 요리체험이 가능한 넓은 곳도 있었지만,  거기 3층 같은 공간이었죠. 새로 이사한 곳에서 번성하시길 빌었습니다.'
        },
        {
          type: 'gallery',
          cols: 2,
          images: [
            {
              url: foodculture18,
              caption: '정갈하게 담아 완성해낸 로드 셰프 비빔밥 한 그릇'
            },
            {
              url: foodculture19,
              caption: '단정하게 진열된 백자 도자기 찬기'
            },
            {
              url: foodculture20,
              caption: '고색창연한 한옥 스타일 수납장과 원목 선반'
            }
          ]
        },
        {
          type: 'text',
          text: '커피를 기다리며, 공간도 둘러봅니다. 30년 경력의 셰프이기도 베이커이기도 하셨던 이선진 대표님의 흔적이 고스란히 있는 공간이었습니다. 이 저력들 속에서 연수구 지역 사회적기업협의회장 일을 맡으시는 신뢰도 나오고, 통합돌봄에 참여할 사명감도 나오나 봅니다.'
        },
        {
          type: 'gallery',
          layout: 'slider',
          images: [
          
            {
              url: foodculture21,
              caption: '전통 가마 천일 정제염 소금 배급포장'
            },
            {
              url: foodculture22,
              caption: '특제 갓 소담한 들기름 보관 소형 호리병들'
            },
            {
              url: foodculture23,
              caption: '청량산 산들바람 아래에서 함께 모인 맑은 하루 완료'
            }
          ]
        },
        {
          type: 'text',
          text: '그리고 다음의 식문화교류회 두번째 모임 전까지 아쉬운, 이별. 준비해 주셔서 기쁜 시간이었습니다. 인천까지 함께 해준 회원분들, 그리고 준비해주신 이선진 대표님도 감사했습니다.'
        },
      ],
      detailBody: `
        맑고 푸른 청량산 자락의 문화체험원에 회원들이 하나둘 모였습니다. 상쾌한 숲내음과 싱그러운 흙냄새가 가득한 이곳에서 오늘의 첫 번째 활동인 '산마늘 명이나물 장아찌 만들기'가 시작되었습니다. 
        
        원동업 편집장님의 친절한 설명 아래, 정성스레 손질한 산마늘 잎을 차곡차곡 쌓고 특제 간장 양념을 정성껏 부었습니다. 정성이 가득 들어간 명이나물이 잘 익어가기를 기대하는 회원들의 눈빛에서 보람 찬 삶의 여유를 느낄 수 있었습니다.
        
        이어서 하이라이트인 식문화 비빔밥 만들기 시간이 펼쳐졌습니다. 각자 집에서 준비해 오거나 체험원 텃밭에서 갓 수확한 갖가지 신선한 나물들이 커다란 양푼 가득 어우러졌습니다. 고추장과 고소한 참기름을 아낌없이 두르고 숟가락을 부딪치며 쓱쓱 비벼내는 활기찬 소리에 웃음꽃이 피어났습니다. 
        
        함께 차린 밥상에 둘러앉아 한 숟가락씩 나누어 먹으며, 건강한 먹거리의 중요성과 옛 추억을 도란도란 나누다 보니 시간 가는 줄 몰랐습니다. 단순히 음식을 만들어 먹는 것을 넘어, 서로의 삶을 든든하게 응원하고 마음의 양식을 꽉 채운 뜻깊은 식문화 교류회였습니다.
      `
    },
    {
      id: 2,
      name: '[6월의 린북클럽] 내 책의 한 페이지를 유튜브로 쓰자!',
      category: 'book',
      specialty: '원동업 성수동편집장',
      desc: '최현우의 「유튜브, AI, 콘텐츠, 창업을 연결하자」 강연 후, 나의 유튜브 촬영을 함께 기획하고 협력 및 실행으로 나아가는 워크숍',
      categoryName: '북클럽',
      image: bookclub1,
      date: '2026.06.13',
      contentBlocks: [
        {
          type: 'text',
          text: '최현우의 「유튜브, AI, 콘텐츠, 창업을 연결하자」 강연 후, 나의 유튜브 촬영을 함께 기획하고, 협력하고, 실행으로 나아가는 시간'
        },
        {
          type: 'quote',
          text: '📍 장소 : 황금바늘\n📅 일시 : 2026년 6월 13일(토)\n🕒 시간 : 오전 10:10 ~ 11:49'
        },
        {
          type: 'text',
          text: '우리의 삶은 수많은 이야기로 채워져 있습니다. 이번 모임에서는 그중 한 페이지를 꺼내 유튜브 콘텐츠로 바꾸고, 촬영을 기획하고, 함께 협력하며, 실제 실행까지 연결하는 첫걸음을 만들어 봅니다.'
        },
        {
          type: 'heading',
          text: '"언젠가 해봐야지"가 아니라, "당장 기획하고, 작게 시도해보자!"'
        },
        {
          type: 'text',
          text: '린북클럽이 함께 합니다.\n\n모임 안내\n\n주제'
        },
        {
          type: 'gallery',
          cols: 1,
          images: [
            {
              url: bookclub1,
              caption: '내 책의 한 페이지를 유튜브로 쓰자! 워크숍 포스터'
            }
          ]
        },
        {
          type: 'text',
          text: '당신의 경험은 누군가에게는 책 한 권보다 값진 콘텐츠일 수 있습니다. 이번 린북클럽에서, 내 삶의 한 페이지를 세상에 꺼내어 써봅시다. 🎥📖✨'
        }
      ],
      detailBody: `
        내 책의 한 페이지를 유튜브로 쓰자!
        한국시니어교류협회 린(Lean)북클럽 안내
        
        최현우의 「유튜브, AI, 콘텐츠, 창업을 연결하자」 강연 후,
        나의 유튜브 촬영을 함께 기획하고, 협력하고, 실행으로 나아가는 시간
        
        📍 장소 : 황금바늘
        📅 일시 : 2026년 6월 13일(토)
        🕒 시간 : 오전 10:10 ~ 11:49
        
        우리의 삶은 수많은 이야기로 채워져 있습니다.
        이번 모임에서는 그중 한 페이지를 꺼내 유튜브 콘텐츠로 바꾸고,
        촬영을 기획하고, 함께 협력하며, 실제 실행까지 연결하는 첫걸음을 만들어 봅니다.
        
        "언젠가 해봐야지"가 아니라,
        "당장 기획하고, 작게 시도해보자!"
        
        린북클럽이 함께 합니다.
        모임 안내
        주제
        
        당신의 경험은 누군가에게는 책 한 권보다 값진 콘텐츠일 수 있습니다.
        이번 린북클럽에서,
        내 삶의 한 페이지를 세상에 꺼내어 써봅시다. 🎥📖✨
      `
    },
    {
      id: 3,
      name: '[6월 문화가 있는 날] 바람이 전하는 노래- 우리세대의 기억과 위로',
      category: 'local',
      specialty: 'gubio',
      desc: '아름다운 선율 and 우리 세대의 기억을 담은 명작 다큐멘터리 영화 <바람이 전하는 말> 특별 상영 및 감동과 인생의 소회를 나누는 교류 음악회입니다.',
      categoryName: '문화체험',
      image: local1,
      date: '2026.06.25',
      contentBlocks: [
        {
          type: 'text',
          text: '안녕하세요. 한국시니어교류협회입니다. 2026년 6월 "문화가 있는 날" 첫 번째 프로젝트로 다큐멘터리 영화 <바람이 전하는 말> (바람이 전하는 노래) 특별 초청 상영회를 준비했습니다. 이번 상영회는 단순한 영화 관람이 아닙니다. 우리 세대가 함께 노래 부르고, 인생 이야기를 나누고, 서로의 풍성한 시각 및 삶의 깨달음을 탐색하는 특별한 문화 교류의 마당입니다. 소수가 함께 모여 깊은 감동을 나누는 고요하고 특별한 공간이 될 것입니다.'
        },
        {
          type: 'quote',
          text: '"새벽을 여는 음악, 사랑을 딛는 시간"\n"우리 세대의 기억과 위로, 인생 동반자와의 공감과 연결"'
        },
        {
          type: 'gallery',
          cols: 1,
          images: [
            {
              url: local1,
              caption: '다큐멘터리 영화 "바람이 전하는 말" 공식 포스터 전경'
            }
          ]
        },
        {
          type: 'heading',
          text: '황혼의 지혜: 노래의 힘 and 인생 역정의 의미'
        },
        {
          type: 'text',
          text: '또한, 이번 영화는 노래가 전하는 깊은 인간애와 고난 속에서도 희망을 잃지 않고 꿋꿋이 헤쳐온 우리 세대의 노래와 삶을 조망합니다. 노래를 통해 우리는 잊고 지냈던 유년의 기억과 기쁨, 그리고 힘겨운 청춘을 이겨내고 지금 이 자리에 서 있는 스스로를 따스하게 위로하게 될 것입니다. 한국 시니어의 음악은 우리 현대사의 역사적 애환을 고스란히 반영하고 있습니다. 그 곡들은 여전히 우리 사회에 힘과 영감을 주는 소중한 음악들입니다.'
        },
        {
          type: 'gallery',
          cols: 1,
          images: [
            {
              url: local2,
              caption: '60년 음악 인생, 3,000곡의 신화가 전하는 뜨거운 삶의 예찬 한마당 전시'
            }
          ]
        },
        {
          type: 'heading',
          text: '함께 걸어온 시간, 다시 울리는 인생의 서사시'
        },
        {
          type: 'text',
          text: '우리가 살아온 시대를 관통한 노래들과, 노래 뒤에 숨겨진 사랑과 삶의 이야기를 자아내어 함께 나누었습니다. 누군가는 인생의 한 페이지를 영화처럼 회상하였고, 누군가는 옛 라이브 가사 한 구절에 눈시울을 붉히기도 하였습니다.'
        },
        {
          type: 'gallery',
          cols: 1,
          images: [
            {
              url: local3,
              caption: '심금을 다시 뛰게 하는 우리 시대의 명곡 실내 사운드트랙 배너'
            }
          ]
        },
        {
          type: 'heading',
          text: '영화보다 더 좋은 시간입니다'
        },
        {
          type: 'text',
          text: '이번 상영회에는 참여 비즈니스 교류회 회원부터 일반 관람객까지 함께 모여 영화가 전하는 따뜻한 메시지를 경청했습니다. 레코드와 라이브 연주를 통해 전해지는 고백은 깊은 위로가 되었습니다. 바람이 실어다 준 노래를 통해, 참석했던 회원들 모두 일상을 힘차게 살아갈 활기차고 포근한 위로 에너지를 듬뿍 가득 채우고 돌아갔습니다.'
        },
        {
          type: 'gallery',
          cols: 1,
          images: [
            {
              url: local4,
              caption: '가장 보통의 딜레탕트를 위한 우리 시대 올드 팝과 가요 LP 슬레이트 전람 벽면'
            }
          ]
        },
        {
          type: 'heading',
          text: '참여자 썰: 영화가 끝나면 이야기는 계속됩니다'
        },
        {
          type: 'text',
          text: '영화 상영 후 약 30분간 관객 여러분과 함께하는 따뜻한 소통 토크쇼 및 썰풀이 교류 시간이 이어졌습니다. 각자의 귀한 한 줄 이야기를 복원하고, 시대를 관통한 음악을 통해 공감대를 나누었습니다.'
        },
        {
          type: 'heading',
          text: '공식 행사 및 참가 정보 안내'
        },
        {
          type: 'quote',
          text: '📌 일시: 2026년 6월 18일 목요일 오후 5:00\n📌 장소: 서대문구 독립문로 "황금바늘" 극장식 소통 전용 세미나관 (독립문역 3번 출구)\n📌 참가비용: 12,000원 (상영 관람, 아날로그 소모임 및 소통 다과 포함)\n\n⭐️ 이런 분들께 추천합니다:\n- 부부/친구/동료와 함께 편안히 삶을 돌아보고 싶은 분\n- 좋은 영화와 음악으로 치유와 깊은 울림을 얻고 싶은 분\n- 힘겨운 청춘을 이겨내고, 활기찬 낙관을 선사하는 위로 에너지를 얻고 싶은 분\n- 소중한 사람의 향기와 온기 있는 시간으로 채우고 싶으신 분'
        }
      ],
      detailBody: `
        바람이 전하는 감미로운 클래식 멜로디와 어쿠스틱 기타 선율을 타고 시니어 세대의 가슴속 깊은 기억과 따뜻한 위로를 보듬는 음악적 교류회가 열렸습니다. 
        
        학창 시절 라디오에서 흘러나오던 그리운 명곡들부터 가슴을 촉촉이 적셨던 대중가요까지, 소박한 원목 살롱 공간에서 한 곡 한 곡 라이브 감상이 진행되었습니다. 연주가 끝날 때마다 곡에 얽힌 아련한 기억들을 수줍게 고백하며, 힘겨웠던 청춘을 꿋꿋하게 버티어낸 서로를 향해 깊은 위로와 감사의 따뜻한 손길을 건넸습니다.
        
        특별 세션으로는 로컬 탐방 전문가 gubio 리더의 인문학적 해설이 덧붙여졌습니다. 우리가 평소 무심히 채워왔던 동네에 서려 있는 아날로그 사운드 스케이프의 역사를 배우고, 일상의 숨겨진 미적 감각을 재발견하는 특별함을 누렸습니다. 
        
        가장 익숙하던 것들로부터 가장 깊은 미적 자극과 가치를 선물 받는 소중하고 충만한 시간이었습니다. 바람이 실어다 준 노래를 통해, 참석했던 회원들 모두 일상을 힘차게 살아갈 활기차고 포근한 위로 에너지를 듬뿍 가득 채우고 돌아갔습니다.
      `
    }
  ];

  const filteredExperts = selectedCategory
    ? experts.filter((exp) => exp.category === selectedCategory)
    : experts;

  return (
    <div className="bg-slate-50 min-h-[500px]">
      {/* Category Chips */}
      {propCategory === undefined && (
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
      )}

      {/* Grid Content */}
      <div className="mt-4">
        {/* Desktop/Tablet Grid View */}
        <motion.div 
          layout
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperts.map((exp) => (
              <ExpertCard 
                key={`desktop-${exp.id}`}
                exp={exp} 
                categories={categories} 
                setSelectedExpert={setSelectedExpert} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile 1-Column List View */}
        <motion.div 
          layout
          className="block md:hidden divide-y divide-slate-100"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperts.map((exp) => {
              const catInfo = categories.find((c) => c.id === exp.category);
              const iconColor = catInfo ? catInfo.color : '#00a896';

              return (
                <motion.div
                  layout
                  key={`mobile-${exp.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setSelectedExpert(exp)}
                  className="flex justify-between items-start py-5.5 cursor-pointer active:bg-slate-100/40 transition-colors gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span 
                      className="text-[11px] font-bold underline underline-offset-4 decoration-1 tracking-wider uppercase inline-block cursor-pointer hover:opacity-80"
                      style={{ color: iconColor, textDecorationColor: `${iconColor}50` }}
                    >
                      {exp.categoryName}
                    </span>
                    <h3 className="text-[15.5px] font-bold text-slate-900 leading-snug break-keep line-clamp-2 pt-0.5">
                      {exp.name}
                    </h3>
                    <p className="text-[12.5px] text-slate-500 leading-relaxed line-clamp-2 font-normal font-sans break-keep pt-0.5">
                      {exp.desc}
                    </p>
                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-slate-400 font-medium font-sans">
                      <span>{exp.specialty}</span>
                      <span>•</span>
                      <span>{exp.date || '2026.06.18'}</span>
                    </div>
                  </div>

                  {exp.image && (
                    <div className="w-[76px] h-[76px] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-3xs self-center">
                      <img 
                        src={exp.image} 
                        alt={exp.name}
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

        {filteredExperts.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            등록된 소모임 프로젝트가 없습니다.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExpert && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExpert(null)}
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
                {selectedExpert.image && (
                  <div className="relative w-full h-48 sm:h-72 md:h-80 overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={selectedExpert.image} 
                      alt={selectedExpert.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    <button 
                      onClick={() => setSelectedExpert(null)}
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
                        {selectedExpert.categoryName}
                      </span>
                      {selectedExpert.date && (
                        <span className="text-xs font-semibold text-slate-400 font-mono">
                          {selectedExpert.date}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedExpert(null)}
                      className={`${selectedExpert.image ? 'hidden md:flex' : 'flex'} p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer`}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <span className="text-xs font-extrabold text-amber-500 uppercase tracking-widest block">소모임 탐방기</span>
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#002147] leading-snug break-keep">
                      {selectedExpert.name}
                    </h3>
                  </div>

                  <hr className="border-slate-100" />
                  
                  <div className="flex items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100/80">
                    <div className="w-10 h-10 rounded-full bg-[#002147]/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#002147]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block tracking-wider uppercase">글쓴이 및 기획자</span>
                      <p className="text-sm font-extrabold text-[#002147]">{selectedExpert.specialty}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selectedExpert.contentBlocks ? (
                      <div className="space-y-8">
                        {selectedExpert.contentBlocks.map((block: any, idx: number) => {
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
                                className="my-5 py-2 px-4 text-[#002147] font-bold text-sm md:text-base leading-relaxed md:leading-loose whitespace-pre-line select-none text-center"
                              >
                                "{block.text}"
                              </div>
                            );
                          }
                          if (block.type === 'gallery') {
                            const layout = block.layout || (block.images && block.images.length > 1 ? 'slider' : 'grid');
                            
                            if (layout === 'slider') {
                              return (
                                <div key={idx}>
                                  <GallerySlider images={block.images} />
                                </div>
                              );
                            }
                            
                            if (layout === 'scroll' || layout === 'carousel') {
                              return (
                                <div key={idx} className="flex gap-4 overflow-x-auto pb-4 pt-2 -mx-2 px-2 snap-x no-scrollbar my-6">
                                  {block.images.map((img: any, imgIdx: number) => (
                                    <div key={imgIdx} className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[45%] bg-slate-50 rounded-2xl border border-slate-100 p-2 shadow-3xs">
                                      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
                                        <img 
                                          src={img.url} 
                                          alt={img.caption || '갤러리 이미지'} 
                                          className="w-full h-full object-cover"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                      {img.caption && (
                                        <p className="mt-2 text-xs md:text-sm font-semibold text-slate-500 text-center truncate px-1">
                                          {img.caption}
                                        </p>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              );
                            }

                            if (layout === 'asymmetric' || layout === 'featured') {
                              const firstImage = block.images[0];
                              const subImages = block.images.slice(1);
                              return (
                                <div key={idx} className="space-y-4 my-6">
                                  {firstImage && (
                                    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-2.5 shadow-sm">
                                      <div className="relative overflow-hidden rounded-xl aspect-[16/9] md:aspect-[21/9] bg-slate-100">
                                        <img 
                                          src={firstImage.url} 
                                          alt={firstImage.caption || '대표 이미지'} 
                                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                      {firstImage.caption && (
                                        <p className="mt-2 text-xs md:text-sm font-bold text-slate-500 text-center">
                                          {firstImage.caption}
                                        </p>
                                      )}
                                    </div>
                                  )}
                                  {subImages.length > 0 && (
                                    <div className={`grid grid-cols-2 md:grid-cols-${Math.min(subImages.length, 3)} gap-4`}>
                                      {subImages.map((img: any, imgIdx: number) => (
                                        <div key={imgIdx} className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-1.5 shadow-3xs">
                                          <div className="relative overflow-hidden rounded-lg aspect-square bg-slate-100">
                                            <img 
                                              src={img.url} 
                                              alt={img.caption || '갤러리 이미지'} 
                                              className="w-full h-full object-cover"
                                              referrerPolicy="no-referrer"
                                            />
                                          </div>
                                          {img.caption && (
                                            <p className="mt-1.5 text-[11px] md:text-xs font-semibold text-slate-500 text-center truncate">
                                              {img.caption}
                                            </p>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            // Default grid layout behavior
                            const cols = block.cols || 1;
                            let gridColsClass = "grid-cols-1";
                            if (cols === 2) {
                              gridColsClass = "grid-cols-1 md:grid-cols-2";
                            } else if (cols === 3) {
                              gridColsClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
                            } else if (cols >= 4) {
                              gridColsClass = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
                            }

                            const aspect = block.aspectRatio || 'original';
                            
                            return (
                              <div key={idx} className={`grid ${gridColsClass} gap-5 md:gap-6 my-6`}>
                                {block.images.map((img: any, imgIdx: number) => {
                                  let imageClass = "transition-transform duration-500 ease-out";
                                  
                                  if (aspect === 'square') {
                                    imageClass += " w-full aspect-square object-cover rounded-xl";
                                  } else if (aspect === 'video') {
                                    imageClass += " w-full aspect-video object-cover rounded-xl";
                                  } else if (aspect === 'classic') {
                                    imageClass += " w-full aspect-[4/3] object-cover rounded-xl";
                                  } else if (aspect === 'match-height') {
                                    imageClass += " h-full w-auto max-w-full object-contain mx-auto rounded-xl";
                                  } else {
                                    imageClass += " w-full h-auto object-contain rounded-xl block";
                                  }

                                  return (
                                    <div key={imgIdx} className="relative overflow-hidden rounded-2xl w-full bg-slate-50 border border-slate-100 p-2 shadow-3xs">
                                      <div className={`relative overflow-hidden rounded-xl ${aspect === 'match-height' ? 'h-40 sm:h-52 md:h-[240px] flex items-center justify-center bg-slate-50/50' : ''}`}>
                                        <img 
                                          src={img.url} 
                                          alt={img.caption || '갤러리 이미지'} 
                                          className={imageClass}
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                      {/* Caption removed in grid layout */}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    ) : (
                      <div className="space-y-3 md:space-y-4">
                        <span className="text-xs font-bold text-slate-400 tracking-wider block uppercase">상세 이야기</span>
                        {selectedExpert.detailBody ? (
                          <div className="text-slate-600 text-sm md:text-base leading-relaxed md:leading-loose font-medium break-keep whitespace-pre-line space-y-4">
                            {selectedExpert.detailBody.trim()}
                          </div>
                        ) : (
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
                            {selectedExpert.desc}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 shrink-0 flex items-center gap-4 pb-6 md:pb-6">
                <button 
                  onClick={() => setSelectedExpert(null)}
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
