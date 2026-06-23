const wedding = {
  // ① 메인 영상
  video: { url: './video/SANY0283.mp4' },

  // ② 신랑·신부 정보
  groom: {
    name: '추연성',
    phone: '010-5556-8485',
    father: '추광석',
    mother: '강차임',
  },
  bride: {
    name: '양규은',
    phone: '010-5029-8599',
    father: '양경식',
    mother: '방경순',
  },

  // ③ 초대문구
  inviteText: [
    '2020년 11월 21일,',
    '평생을 다르게 살아온 우리가 만나',
    '2026년 11월 21일,',
    '앞으로의 영원을 함께 할 것을 약속하려 합니다.',
    '',
    '여섯번의 사계절을 넘어',
    '앞으로 함께 나아갈 수많은 계절,',
    '그 시작을 약속할 자리에',
    '소중한 걸음으로 함께해 주시면 감사하겠습니다.',
  ],

  // ④ 날짜·장소
  date: '2026-11-21T18:00:00',
  venue: {
    name: '인천 아시아드웨딩컨벤션',
    hall: '비아벨라홀',
    address: '인천광역시 서구 봉수대로 806',
    lat: 37.5387,
    lng: 126.6728,
    transport: {
      subway: '인천 1호선 검암역 1번 출구 도보 10분',
      bus: '아시아드웨딩컨벤션 정류장 하차',
      parking: '전용 주차장 무료 이용',
    },
  },

  // ⑤ 갤러리
  gallery: [
    './gallery/1.jpg',
    './gallery/2.jpg',
    './gallery/3.jpg',
    './gallery/4.jpg',
    './gallery/5.jpg',
    './gallery/6.jpg',
    './gallery/7.jpg',
    './gallery/8.jpg',
    './gallery/9.jpg',
    './gallery/10.jpg',
    './gallery/11.jpg',
    './gallery/12.jpg',
    './gallery/13.jpg',
    './gallery/14.jpg',
    './gallery/15.jpg',
    './gallery/16.jpg',
    './gallery/17.jpg',
    './gallery/18.jpg',
    './gallery/19.jpg',
    './gallery/20.jpg',
    './gallery/21.jpg',
    './gallery/22.jpg',
    './gallery/23.jpg',
    // 사진 추가할 때마다 이 아래에 경로 추가
  ],

  // ⑦ 계좌 — 실제 계좌번호로 교체해주세요
  accounts: [
    { side: 'groom', bank: '국민은행',   holder: '추연성', number: '123-456-789012' },
    { side: 'groom', bank: '신한은행',   holder: '추광석', number: '987-654-321098' },
    { side: 'groom', bank: '신한은행',   holder: '강차임', number: '987-654-321098' },
    { side: 'bride', bank: '카카오뱅크', holder: '양규은', number: '333-44-5555555' },
    { side: 'bride', bank: '카카오뱅크', holder: '양경식', number: '333-44-5555555' },
    { side: 'bride', bank: '카카오뱅크', holder: '방경순', number: '333-44-5555555' },
  ],

  // ⑧ OG / 카카오 공유 — 배포 URL 확정 후 교체
  og: {
  title: '추연성 💍 양규은 결혼합니다.',
  description: '2026년 11월 21일 토요일 오후 6시',
  imageUrl: 'https://rbdms213.github.io/cy-yk-20261121-wedding-private/gallery/1.jpg',
  pageUrl: 'https://rbdms213.github.io/cy-yk-20261121-wedding-private/',
  kakaoAppKey: '0ba03cc8903c5643a252fc137701ef85',
  },
  
  // ⑨ Supabase
  supabase: {
    url: 'https://saxslvwgjznbqwmgcwdq.supabase.co',
    anonKey: 'sb_publishable_z96MsIOQUSwArJ0TDoWQ2A_ftfgekHP',
  },
};
