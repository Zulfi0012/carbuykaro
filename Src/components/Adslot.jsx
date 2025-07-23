import React from 'react';

function AdSlot({ slotName }) {
  return (
    <div className="my-4 text-center">
      {/* Replace this with actual AdSense code */}
      <div style={{ width: '100%', height: '90px', backgroundColor: '#f0f0f0' }}>
        <p className="text-muted">Ad Slot: {slotName}</p>
      </div>
    </div>
  );
}

export default AdSlot;