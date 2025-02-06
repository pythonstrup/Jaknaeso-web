import * as RadxSlider from '@radix-ui/react-slider';

import { ArrowDown2Icon, ArrowUp2Icon, CheckIcon } from '@/assets/icons';

import styles from './Slider.module.scss';

interface SliderProps {
  value: number;
  setValue: (value: number) => void;
}

const labels = {
  100: '매우 동의해요',
  75: '조금 동의해요',
  50: '보통이에요',
  25: '조금 반대해요',
  0: '매우 반대해요',
};

const Slider = ({ value, setValue }: SliderProps) => (
  <div className={styles.container}>
    <div className={styles.labels}>
      {Object.entries(labels)
        .reverse()
        .map(([key, val]: [string, string]) => (
          <div key={key} className={styles.label} onClick={() => setValue(Number(key))}>
            {value === Number(key) && (
              <div className={styles.checkIcon}>
                <CheckIcon width="1.5rem" height="1.5rem" />
              </div>
            )}
            <span className={value === Number(key) ? styles.label__checked : ''}>{val}</span>
          </div>
        ))}
    </div>
    <RadxSlider.Root
      className={styles.root}
      orientation="vertical"
      value={[value]}
      onValueChange={(val) => setValue(val[0])}
      min={0}
      max={100}
      step={25}
    >
      <RadxSlider.Track className={styles.track} />
      <RadxSlider.Thumb className={styles.thumb}>
        <ArrowUp2Icon />
        <ArrowDown2Icon />
      </RadxSlider.Thumb>
    </RadxSlider.Root>
  </div>
);

export default Slider;
