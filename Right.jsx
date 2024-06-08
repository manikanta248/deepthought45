import React from 'react';

export default function Right() {
  return (
    <div style={{ display: "flex", width: "95px", height: '470px' }}>
      <div style={{ width: "37px", background: "black", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" ,boxShadow: "-9px  6px 8px rgba(0,0,0,0.4)"}}>
        <i className="bi bi-x text-white mx-2"></i>
        <p className='mx-2 text-white mt-2'>N</p>
        <p className='mx-2 text-white'>o</p>
        <p className='mx-2 text-white'>t</p>
        <p className='mx-2 text-white'>i</p>
        <p className='mx-2 text-white'>c</p>
        <p className='mx-2 text-white'>e</p>
        <p className='mx-2 text-white mt-4'>b</p>
        <p className='mx-2 text-white'>o</p>
        <p className='mx-2 text-white'>a</p>
        <p className='mx-2 text-white'>r</p>
        <p className='mx-2 text-white'>d</p>
      </div>
      <div style={{ width: "58px", background: "white" }}>
        {/* Additional content can go here */}
      </div>
    </div>
  );
}
