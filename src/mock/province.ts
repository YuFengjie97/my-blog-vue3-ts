interface Province {
  id: string;
  name: string;
  coordinate: number[];
}

const provinces: Province[] = [
  { id: "110000", name: "北京市", coordinate: [116.405285, 39.904989] },
  { id: "120000", name: "天津市", coordinate: [117.190182, 39.125596] },
  { id: "130000", name: "河北省", coordinate: [114.502461, 38.045474] },
  { id: "140000", name: "山西省", coordinate: [112.549248, 37.857014] },
  { id: "150000", name: "内蒙古自治区", coordinate: [111.670801, 40.818311] },
  { id: "210000", name: "辽宁省", coordinate: [123.429096, 41.796767] },
  { id: "220000", name: "吉林省", coordinate: [125.3245, 43.886841] },
  { id: "230000", name: "黑龙江省", coordinate: [126.642464, 45.756967] },
  { id: "310000", name: "上海市", coordinate: [121.472644, 31.231706] },
  { id: "320000", name: "江苏省", coordinate: [118.767413, 32.041544] },
  { id: "330000", name: "浙江省", coordinate: [120.153576, 30.287459] },
  { id: "340000", name: "安徽省", coordinate: [117.283042, 31.86119] },
  { id: "350000", name: "福建省", coordinate: [119.306239, 26.075302] },
  { id: "360000", name: "江西省", coordinate: [115.892151, 28.676493] },
  { id: "370000", name: "山东省", coordinate: [117.000923, 36.675807] },
  { id: "410000", name: "河南省", coordinate: [113.665412, 34.757975] },
  { id: "420000", name: "湖北省", coordinate: [114.298572, 30.584355] },
  { id: "430000", name: "湖南省", coordinate: [112.982279, 28.19409] },
  { id: "440000", name: "广东省", coordinate: [113.280637, 23.125178] },
  { id: "450000", name: "广西壮族自治区", coordinate: [108.320004, 22.82402] },
  { id: "460000", name: "海南省", coordinate: [110.33119, 20.031971] },
  { id: "500000", name: "重庆市", coordinate: [106.504962, 29.533155] },
  { id: "510000", name: "四川省", coordinate: [104.065735, 30.659462] },
  { id: "520000", name: "贵州省", coordinate: [106.713478, 26.578343] },
  { id: "530000", name: "云南省", coordinate: [102.712251, 25.040609] },
  { id: "540000", name: "西藏自治区", coordinate: [91.132212, 29.660361] },
  { id: "610000", name: "陕西省", coordinate: [108.948024, 34.263161] },
  { id: "620000", name: "甘肃省", coordinate: [103.823557, 36.058039] },
  { id: "630000", name: "青海省", coordinate: [101.778916, 36.623178] },
  { id: "640000", name: "宁夏回族自治区", coordinate: [106.278179, 38.46637] },
  {
    id: "650000",
    name: "新疆维吾尔自治区",
    coordinate: [87.617733, 43.792818],
  },
  { id: "710000", name: "台湾省", coordinate: [121.509062, 25.044332] },
  { id: "810000", name: "香港特别行政区", coordinate: [114.173355, 22.320048] },
];

export default provinces;
