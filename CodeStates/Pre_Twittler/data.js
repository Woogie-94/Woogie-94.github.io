var DATA = [
  { id: 1, user: "ingikim", message: "Welcome to Code States #codestates", created_at: "Fri Feb 05 2021 12:44:35 GMT+0900 (Korean Standard Time)" },
  { id: 2, user: "satya", message: "this is test message #pair #programming", created_at: "Fri Feb 03 2021 10:44:35 GMT+0900 (Korean Standard Time)" },
  { id: 3, user: "sundar", message: "code now! #work #hard", created_at: "Fri Jan 18 2021 12:44:35 GMT+0900 (Korean Standard Time)" },
  { id: 4, user: "steve", message: "Stay hungry, and stay foolish", created_at: "Fri Dec 05 2020 12:44:35 GMT+0900 (Korean Standard Time)" },
  { id: 5, user: "tim", message: "education for real world", created_at: "Fri Feb 05 2019 12:44:35 GMT+0900 (Korean Standard Time)" },
];

// local에 data가 없으면, DATA 변수를 담아줌,
if (localStorage.getItem("data") === null) localStorage.setItem("data", JSON.stringify(DATA));

// local에 data가 있다면 가져옴
let storageDATA = JSON.parse(localStorage.getItem("data"));

//[[[ id Counting Fn]]]//
function IdCount() {
  let count = storageDATA[storageDATA.length - 1].id;

  this.increase = () => {
    return ++count;
  };

  this.getCount = () => {
    return count;
  };
}

//[[[ timeStamp Fn ]]]//
function timeStamp(writingTime) {
  const resultTime = new Date() - new Date(writingTime);
  const minute = Math.floor(resultTime / 60000);
  const hour = Math.floor(resultTime / 3600000);
  const day = Math.floor(resultTime / 86400000);
  const week = Math.floor(resultTime / 604800000);
  const month = Math.floor(resultTime / 2628000000);
  const year = Math.floor(resultTime / 31536000000);

  if (resultTime < 60000) return "방금 전";
  else if (resultTime >= 60000 && resultTime < 3600000) return `${minute}분 전`;
  else if (resultTime >= 3600000 && resultTime < 86400000) return `${hour}시 전`;
  else if (resultTime >= 86400000 && resultTime < 604800000) return `${day}일 전`;
  else if (resultTime >= 604800000 && resultTime < 2628000000) return `${week}주 전`;
  else if (resultTime >= 2628000000 && resultTime < 31536000000) return `${month}달 전`;
  else return `${year}년 전`;
}
