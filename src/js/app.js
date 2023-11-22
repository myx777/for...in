export function orderByProps(obj, order) {
    const result = [];
  
    // Добавляем свойства из массива order
    for (const key of order) {
      if (obj.hasOwnProperty(key)) {
        result.push({ key, value: obj[key] });
        delete obj[key]; // Удаляем использованные свойства из объекта
      }
    }
  
    // Добавляем оставшиеся свойства, отсортированные по алфавиту
    const remainingKeys = Object.keys(obj).sort();
    for (const key of remainingKeys) {
      result.push({ key, value: obj[key] });
    }
  
    return result;
}

  
  
  