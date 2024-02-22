export const changeToKoreanName = (englishName) => {
  let koreanName = "";

  switch (englishName) {
    case "chiikawa":
      koreanName = "치이카와";
      break;
    case "hachiware":
      koreanName = "하치와레";
      break;
    case "usagi":
      koreanName = "우사기";
      break;
    case "momonga":
      koreanName = "모몽가";
      break;
    default:
      koreanName = "치이카와";
  }

  return koreanName;
};
