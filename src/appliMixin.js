export const appliMixin = {
  filters: {
    attachUnit(val) {
      if (val >= 10000) {
        const str = String(val);
        const cutNum = str.slice(-str.length, -3);
        if (cutNum[length + 1] === "0") {
          return `${cutNum.slice(0, -1)}万`;
        } else {
          return `${cutNum.slice(0, -1)}.${cutNum.slice(-1)}万`;
        }
      } else {
        return val.toLocaleString();
      }
    },
    toAbridge(val, lim) {
      if (val.length > lim) {
        const abridge = val.slice(0, lim - 1) + "...";
        return abridge;
      } else {
        return val;
      }
    },
  },
};
