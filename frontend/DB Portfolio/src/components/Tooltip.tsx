import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => (
  <RadixTooltip.Provider delayDuration={300}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          sideOffset={6}
          className="z-50 px-2.5 py-1.5 rounded-md text-xs font-mono tracking-wide bg-gray-800 text-gray-200 border border-white/10 shadow-xl animate-fade-in"
        >
          {content}
          <RadixTooltip.Arrow className="fill-gray-800" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);
