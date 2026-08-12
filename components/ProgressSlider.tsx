"use client";

type ProgressSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function ProgressSlider({
  value,
  onChange,
}: ProgressSliderProps) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-[#756B65]">Reading progress</p>

          <p className="mt-1 font-serif text-4xl">{value}%</p>
        </div>

        <span className="text-sm text-[#9B8F87]">
          {value === 100 ? "Finished" : "In progress"}
        </span>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={(event) => {
            onChange(Number(event.target.value));
          }}
          aria-label="Reading progress"
          className="h-3 w-full cursor-pointer accent-[#332D2A]"
        />

        <div className="mt-2 flex justify-between text-xs text-[#9B8F87]">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
