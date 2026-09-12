export const teams=[
{name:'수원 삼성',short:'수원',played:25,pts:53,w:16,d:5,l:4,gd:19},
{name:'서울 이랜드',short:'서울E',played:25,pts:45,w:13,d:6,l:6,gd:14},
{name:'대구 FC',short:'대구',played:25,pts:46,w:13,d:7,l:5,gd:14},
{name:'수원 FC',short:'수원FC',played:23,pts:44,w:12,d:8,l:3,gd:18},
{name:'화성 FC',short:'화성',played:24,pts:40,w:11,d:7,l:6,gd:12},
{name:'부산 아이파크',short:'부산',played:24,pts:38,w:11,d:5,l:8,gd:6},
{name:'충남아산 FC',short:'충남아산',played:24,pts:31,w:8,d:7,l:9,gd:2},
{name:'김포 FC',short:'김포',played:23,pts:31,w:7,d:10,l:6,gd:0},
{name:'경남 FC',short:'경남',played:23,pts:30,w:7,d:9,l:7,gd:0},
{name:'성남 FC',short:'성남',played:23,pts:30,w:7,d:9,l:7,gd:-1},
{name:'용인 FC',short:'용인',played:24,pts:26,w:5,d:11,l:8,gd:-4},
{name:'파주 프런티어',short:'파주',played:24,pts:26,w:7,d:5,l:12,gd:-6},
{name:'충북청주 FC',short:'충북청주',played:24,pts:23,w:3,d:14,l:7,gd:-12},
{name:'천안시티 FC',short:'천안',played:24,pts:22,w:4,d:10,l:10,gd:-5},
{name:'안산 그리너스',short:'안산',played:24,pts:22,w:6,d:4,l:14,gd:-19},
{name:'전남 드래곤즈',short:'전남',played:23,pts:20,w:4,d:8,l:11,gd:-12},
{name:'김해 FC',short:'김해',played:23,pts:13,w:2,d:7,l:14,gd:-26}
];

// 공식 K리그 26R 확정 대진. 이후 라운드는 data 업데이트 시 같은 형식으로 추가.
export const fixtures=[
{round:26,date:'2026-09-12',home:'대구',away:'용인',result:null},
{round:26,date:'2026-09-12',home:'서울E',away:'수원',result:[0,1]},
{round:26,date:'2026-09-12',home:'안산',away:'화성',result:null},
{round:26,date:'2026-09-12',home:'충남아산',away:'충북청주',result:null},
{round:26,date:'2026-09-13',home:'경남',away:'성남',result:null},
{round:26,date:'2026-09-13',home:'전남',away:'김포',result:null},
{round:26,date:'2026-09-13',home:'부산',away:'김해',result:null},
{round:26,date:'2026-09-13',home:'수원FC',away:'천안',result:null},
// 수원 잔여 일정: 공식 일정에서 확인된 대진/일자
{round:28,date:'2026-10-11',home:'수원',away:'안산',result:null},
{round:29,date:'2026-10-18',home:'수원',away:'화성',result:null},
{round:30,date:'2026-10-25',home:'성남',away:'수원',result:null},
{round:31,date:'2026-10-31',home:'대구',away:'수원',result:null},
{round:32,date:'2026-11-08',home:'수원',away:'용인',result:null},
{round:33,date:'2026-11-21',home:'수원',away:'경남',result:null},
{round:34,date:'2026-11-29',home:'전남',away:'수원',result:null}
];
