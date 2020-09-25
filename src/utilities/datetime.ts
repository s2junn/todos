type DateType = Date | string | number;

const dayOfWeek = {
  full: {
    kr: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  short: {
    kr: ["일", "월", "화", "수", "목", "금", "토"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
};

export const zeroFormat = (value: number | string) =>
  value.toString().length === 1 ? `0${value}` : value;

export const dateFormatter = function (
  format: string,
  date: DateType | undefined
) {
  if (!date) {
    return " ";
  }

  let _date: Date;
  if (typeof date === "string" || typeof date === "number") {
    _date = new Date(date);
  } else {
    _date = new Date(date.toString().replace(/\.|-|s+/g, "/"));
  }

  return format.replace(
    /(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi,
    ($1: string): any => {
      switch ($1) {
        case "yyyy":
          return _date.getFullYear(); // 년 (4자리)
        case "yy":
          return zeroFormat(_date.getFullYear() % 1000); // 년 (2자리)
        case "MM":
          return zeroFormat(_date.getMonth() + 1); // 월 (2자리)
        case "dd":
          return zeroFormat(_date.getDate()); // 일 (2자리)
        case "KS":
          return dayOfWeek.short.kr[_date.getDay()]; // 요일 (짧은 한글)
        case "KL":
          return dayOfWeek.full.kr[_date.getDay()]; // 요일 (긴 한글)
        case "ES":
          return dayOfWeek.short.en[_date.getDay()]; // 요일 (짧은 영어)
        case "EL":
          return dayOfWeek.full.en[_date.getDay()]; // 요일 (긴 영어)
        case "HH":
          return zeroFormat(_date.getHours()); // 시간 (24시간 기준, 2자리)
        case "hh":
          return zeroFormat(_date.getHours() % 12 ? _date.getHours() % 12 : 12); // 시간 (12시간 기준, 2자리)
        case "mm":
          return zeroFormat(_date.getMinutes()); // 분 (2자리)
        case "ss":
          return zeroFormat(_date.getSeconds()); // 초 (2자리)
        case "a/p":
          return _date.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
        default:
          return $1;
      }
    }
  );
};
