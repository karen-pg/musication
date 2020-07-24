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
    toAbridge(val) {
      if (val.length > 15) {
        const abridge = `${val.slice(0, 14)}...`;
        return abridge;
      } else {
        return val;
      }
    },
  },
};
