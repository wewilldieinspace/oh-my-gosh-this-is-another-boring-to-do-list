const checkTime = (time: number) => (time < 10 ? `${time}0` : time);

export const formatDate = (d: string) => {
  const date = new Date(d);
  return `${date.getDate()}/
    ${date.getMonth() + 1}/
    ${String(date.getFullYear()).slice(-2)}, 
    ${checkTime(date.getHours())}
    :00`;
};
