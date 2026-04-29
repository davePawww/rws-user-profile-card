type StatusIndicatorProps = {
  isOnline: boolean;
};

export function StatusIndicator({ isOnline }: StatusIndicatorProps) {
  return (
    <div
      data-testid="status-indicator"
      className={`absolute top-3 right-3 size-3 rounded-full ${
        isOnline
          ? 'border-2 border-[#39ff14]/40 bg-[#39ff14]/30'
          : 'border-2 border-gray-400/40 bg-gray-400/30'
      }`}
    />
  );
}
