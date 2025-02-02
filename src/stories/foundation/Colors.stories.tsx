import React from 'react';
import type { Meta } from '@storybook/react';

const primaryColors = {
  'Primary Blue 100': '#dbe6ff',
  'Primary Blue 200': '#bfd2ff',
  'Primary Blue 300': '#95b3ff',
  'Primary Blue 400': '#6291ff',
  'Primary Blue 500': '#3f78ff',
  'Primary Blue 600': '#2659d0',
  'Primary Blue 700': '#1b408f',
};

const neutralColors = {
  'Neutral 50': '#fdfdff',
  'Neutral 100': '#f3f4f8',
  'Neutral 200': '#edeff4',
  'Neutral 300': '#dfe3e9',
  'Neutral 400': '#d4d7e2',
  'Neutral 500': '#a9aeba',
  'Neutral 600': '#8c909c',
  'Neutral 700': '#676b75',
  'Neutral 800': '#444953',
  'Neutral 900': '#222329',
};

const blackAndWhite = {
  white: '#fff',
  black: '#000',
};

const red = {
  red: '#f03e3e',
};

const colors = {
  white: '#fff',
  black: '#000',
  red: '#f03e3e',
  primaryBlue100: '#dbe6ff',
  primaryBlue200: '#bfd2ff',
  primaryBlue300: '#95b3ff',
  primaryBlue400: '#6291ff',
  primaryBlue500: '#3f78ff',
  primaryBlue600: '#2659d0',
  primaryBlue700: '#1b408f',

  neutral050: '#fdfdff',
  neutral100: '#f3f4f8',
  neutral200: '#edeff4',
  neutral300: '#dfe3e9',
  neutral400: '#d4d7e2',
  neutral500: '#a9aeba',
  neutral600: '#8c909c',
  neutral700: '#676b75',
  neutral800: '#444953',
  neutral900: '#222329',
};

export default {
  title: 'Foundation/Colors',
} as Meta;

const ColorCard = ({ name, value }: { name: string; value: string }) => (
  <div
    key={name}
    style={{
      textAlign: 'center',
    }}
  >
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: value,
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        margin: '0 auto',
      }}
    />
    <p style={{ marginTop: '8px', fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{name}</p>
    <p style={{ fontSize: '12px', color: '#666', marginTop: 0 }}>{value}</p>
  </div>
);

export const ColorPalette = () => {
  return (
    <div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Primary Colors</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
          marginBottom: '30px',
        }}
      >
        {Object.entries(primaryColors).map(([name, value]) => (
          <ColorCard key={value} name={name} value={value} />
        ))}
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Neutral Colors</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
        {Object.entries(neutralColors).map(([name, value]) => (
          <ColorCard key={value} name={name} value={value} />
        ))}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Black & White</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
        {Object.entries(blackAndWhite).map(([name, value]) => (
          <ColorCard key={value} name={name} value={value} />
        ))}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Red</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
        {Object.entries(red).map(([name, value]) => (
          <ColorCard key={value} name={name} value={value} />
        ))}
      </div>
    </div>
  );
};
