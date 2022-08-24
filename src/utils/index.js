import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  // Object.assign({}, object)
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在vlaue变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完毕之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

// debounce
const debounce = (func, delay) => {
  let timeout;
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...param);
    }, delay);
  };
};

const log = debounce(() => console.log("call"), 5000);
// 执行三次log函数 五秒之后只打印一次
log();
log();
log();
