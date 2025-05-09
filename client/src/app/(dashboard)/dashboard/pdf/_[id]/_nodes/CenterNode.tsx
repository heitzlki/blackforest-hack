import React, { memo, useState } from 'react';

import { Handle, Position } from '@xyflow/react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { useStore } from '@/lib/store';

function CenterNode({
  data,
  id,
}: {
  data: { color: string; title: string };
  id: string;
}) {
  const { color1, color2, selectedNode } = useStore();
  const isSelected = selectedNode?.id === id;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`px-8 py-4 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm max-w-[280px] w-max ${
        isSelected ? '' : ''
      } ${isHovered ? 'scale-105' : ''}`}
      style={{
        boxShadow: isSelected ? `0 0 8px ${color1}` : '',
        // borderColor: isSelected ? color1 : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='flex'>
        <div className='ml-2 break-all'>
          <div className='text-lg font-bold break-words'>{data.title}</div>
          {/* <div className='dark:text-white'>{data.info}</div> */}
        </div>
      </div>
      <Handle
        type='source'
        position={Position.Top}
        className='opacity-0 height-0 width-0 top-auto bottom-auto'
      />
      <Handle
        type='target'
        position={Position.Bottom}
        className='opacity-0 height-0 width-0 top-auto bottom-auto'
      />
      {isHovered && (
        <BorderBeam
          duration={4}
          size={40}
          colorFrom={color1}
          colorTo={color2}
        />
      )}
    </div>
  );
}

export default memo(CenterNode);
