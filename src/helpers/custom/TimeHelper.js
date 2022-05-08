import moment from 'moment';

const time = {
  10: { start: '10:00:00', end: `10:30:00` },
  1030: { start: '10:30:00', end: `11:00:00` },
  11: { start: '11:00:00', end: `11:30:00` },
  1130: { start: '11:30:00', end: `12:00:00` },
  12: { start: '12:00:00', end: `12:30:00` },
  1230: { start: '12:30:00', end: `13:00:00` },
  1: { start: '13:00:00', end: `13:30:00` },
  130: { start: '13:30:00', end: `14:00:00` },
  2: { start: '14:00:00', end: `14:30:00` },
  230: { start: '14:30:00', end: `15:00:00` },
  3: { start: '15:00:00', end: `15:30:00` },
  330: { start: '15:30:00', end: `16:00:00` },
  4: { start: '16:00:00', end: `16:30:00` },
  430: { start: '16:30:00', end: `17:00:00` },
  5: { start: '17:00:00', end: `17:30:00` },
  530: { start: '17:30:00', end: `18:00` },
  6: { start: '18:00:00', end: `18:30:00` },
  630: { start: '18:30:00', end: `19:00:00` },
  7: { start: '19:00:00', end: `19:30:00` },
  730: { start: '19:30:00', end: `20:00:00` },
  8: { start: '20:00:00', end: `20:30:00` },
  830: { start: '20:30:00', end: `21:00:00` },
  9: { start: '21:00:00', end: `21:30:00` },
};

const timeList = {
  10: `10:00 - 10:30`,
  1030: `10:30 - 11:00`,
  11: `11:00 - 11:30`,
  1130: `11:30 - 12:00`,
  12: `12:00 - 12:30`,
  1230: `12:30 - 01:00`,
  1: `01:00 - 01:30`,
  130: `01:30 - 02:00`,
  2: `02:00 - 02:30`,
  230: `02:30 - 03:00`,
  3: `03:00 - 03:30`,
  330: `03:30 - 04:00`,
  4: `04:00 - 04:30`,
};

const calculateTime = (data) => {
  const [hour, min] = data.split(':');
  return hour * 60 + parseInt(min);
};

const findTime = (set) => {
  if (moment(new Date()).format('YYYY-MM-DD') !== set?.date?.split('T')?.[0]) {
    return false;
  }
  const timeRange = time?.[set?.meetingTime];
  const startTime = calculateTime(timeRange?.start);
  const endTime = calculateTime(timeRange?.end);
  const currentTime = calculateTime(moment().format('HH:mm'));
  // console.log(`startTime, endTime, currentTime`, startTime, endTime, currentTime)
  if (currentTime >= startTime && currentTime <= endTime) {
    return true;
  } else {
    return false;
  }
};

const calculateTimeCount = (data) => {
  const currentTime = moment(new Date()); //now
  const [date] = data?.date?.split('T');
  const timeRange = time?.[data?.meetingTime];
  const examTime = moment(`${date}T${timeRange?.start}`);
  const difference = currentTime.diff(examTime, 'second') * 1000;
  //   const exam = moment(`2022-04-29T18:00:00`);
  //   console.log(currentTime.diff(exam, 'second') * 1000); // 44700
  if (difference < 0) {
    return difference * -1;
  } else {
    return 0;
  }
};

export { findTime, calculateTimeCount, timeList };
