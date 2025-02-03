import React from 'react';
import type { Meta } from '@storybook/react';

const typography = {
  title1: {
    label: 'Title 1',
    fontSize: '2rem',
    fontWeight: '700',
    lineHeight: '130%',
    padding: '10px 0',
  },
  title2: {
    label: 'Title 2',
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '130%',
    padding: '7px 0',
  },
  title3: {
    label: 'Title 3',
    fontSize: '1.25rem',
    fontWeight: '700',
    lineHeight: '130%',
    padding: '0.375rem 0',
  },
  title4: {
    label: 'Title 4',
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: '130%',
    padding: '0.375rem 0',
  },
  subTitle1: {
    label: 'Subtitle 1',
    fontSize: '1.125rem',
    fontWeight: '600',
    lineHeight: '130%',
    padding: '0.3125rem 0',
  },
  subTitle2: {
    label: 'Subtitle 2',
    fontSize: '1rem',
    fontWeight: '600',
    lineHeight: '130%',
    padding: '0.3125rem 0',
  },
  subTitle3: {
    label: 'Subtitle 3',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '130%',
    padding: '0.25rem 0',
  },
  subTitle4: {
    label: 'Subtitle 4',
    fontSize: '0.875rem',
    fontWeight: '600',
    lineHeight: '130%',
    padding: '0.25rem 0',
  },
  body1: {
    label: 'Body 1',
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '150%',
    padding: '0.3125rem 0 0.375rem 0',
  },
  body2: {
    label: 'Body 2',
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '150%',
    padding: '0.3125rem 0',
  },
  caption: {
    label: 'Caption',
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '150%',
    padding: '0.25rem 0',
  },
};

export default {
  title: 'Foundation/Typography',
} as Meta;

export const TypographyPalete = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {Object.entries(typography).map(([key, style]) => (
        <div key={key} style={{ borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
          <p
            style={{
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              lineHeight: style.lineHeight,
              marginBottom: '4px',
            }}
          >
            {style.label} - The quick brown fox jumps over the lazy dog
          </p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            {`Size: ${style.fontSize} / Weight: ${style.fontWeight} / Line Height: ${style.lineHeight}`}
          </p>
        </div>
      ))}
    </div>
  );
};
