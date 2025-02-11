export const formatToKoreanOrder = (ordinalNumber?: number) => {
  if (!ordinalNumber) {
    return '';
  }
  const units = ['한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉'];
  const tens = ['열', '스물', '서른', '마흔', '쉰', '예순', '일흔', '여든', '아흔'];

  if (ordinalNumber === 1) {
    return '첫번째';
  } else if (ordinalNumber <= 9) {
    return units[ordinalNumber - 1] + '번째';
  } else if (ordinalNumber <= 19) {
    return '열' + (ordinalNumber === 10 ? '번째' : units[ordinalNumber - 10] + '번째'); // 10~19
  } else {
    const ten = Math.floor(ordinalNumber / 10);
    const one = ordinalNumber % 10;
    return tens[ten - 1] + (one === 0 ? '번째' : units[one - 1] + '번째'); // 20+
  }
};
