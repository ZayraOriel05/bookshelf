"use client";

export type ReadingStatusValue =
  | "want-to-read"
  | "currently-reading"
  | "read"
  | "dnf";

type ReadingStatusProps = {
  value: ReadingStatusValue;
  onChange: (value: ReadingStatusValue) => void;
};

const statuses: {
  value: ReadingStatusValue;
  label: string;
}[] = [
  {
    value: "want-to-read",
    label: "Want to Read",
  },
  {
    value: "currently-reading",
    label: "Currently Reading",
  },
  {
    value: "read",
    label: "Read",
  },
  {
    value: "dnf",
    label: "DNF",
  },
];

export default function ReadingStatus({ value, onChange }: ReadingStatusProps) {
  return (
    <div>
      <p className="text-sm text-[#756B65]">Reading status</p>

      <div
        className="mt-3 flex flex-wrap gap-2"
        role="group"
        aria-label="Reading status"
      >
        {statuses.map((status) => {
          const active = status.value === value;

          return (
            <button
              key={status.value}
              type="button"
              onClick={() => onChange(status.value)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active
                  ? "bg-[#332D2A] text-white"
                  : "bg-[#F1ECE5] text-[#756B65] hover:bg-[#E8E0D7] hover:text-[#332D2A]"
              }`}
            >
              {status.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
