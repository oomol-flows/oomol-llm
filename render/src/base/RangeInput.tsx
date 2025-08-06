import React from 'react';

export interface RangeInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number | string) => void;
  defaultValue?: number;
  disabled?: boolean;
}

export function RangeInput({ label, value, min, max, step, onChange, defaultValue, disabled }: RangeInputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label>{label}:</label>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          defaultValue={defaultValue}
          disabled={disabled}
          style={{
            height: "4px",
            flex: 1,
            padding: 0,
            margin: 0,
            border: "none",
          }} />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={(e) => {
            const newValue = e.target.value === ""
              ? ""
              : Math.min(Math.max(Number(e.target.value), min), max);
            onChange(newValue);
          }}
          onBlur={(e) => {
            const numValue = Number(e.target.value);
            if (e.target.value === "" || isNaN(numValue)) {
              onChange(min);
            } else {
              const clampedValue = Math.min(Math.max(numValue, min), max);
              const finalValue = Number.isInteger(step)
                ? Math.round(clampedValue)
                : Number.parseFloat(clampedValue.toFixed(2));
              onChange(finalValue);
            }
          }}
          style={{ width: "60px", margin: 0 }} />
      </div>
    </div>
  );
}
