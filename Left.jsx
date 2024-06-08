import React, { useState } from 'react';

export default function Left({project}) {
  const [clicked, setClicked] = useState(false);
  const task = project.tasks[0];
    const assets = task.assets;
  
    // Access the first asset directly
    const firstAsset = assets[0];
    const second = assets[1];
    const third = assets[2];
    const forth = assets[3];

  return (
    <div style={{ position: 'relative' }}>
      {!clicked ? (
        <div>
          <div style={{ width: "132px", height: "50px", background: "black", borderTopRightRadius: "20px" }}></div>
          <div className='container' style={{ width: "132px", height: "692px", boxShadow: "0 12px 14px rgba(0,0,0,0.4)", borderRadius: "0 0 20px 20px" }}>
            <div onClick={() => setClicked(true)} style={{ cursor:"pointer", display: "flex", justifyContent: "center", padding: "15px 0", borderRadius: "20px", border: "0.3px solid blue", marginTop: "2rem" }}>
              1
            </div>
          </div>
        </div>
      ) : (
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, background: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: "392px", height: "50px", background: "black", borderTopRightRadius: "20px" }}>
            <div className='mt-1 text-white mx-3'>Journey Board</div>
            <button 
              type="button" 
              className='btn text-white' 
              style={{ marginLeft: 'auto', marginRight: '10px' }}
              onClick={() => setClicked(false)}
            >
              close
            </button>
          </div>
          <div style={{ width: "392px", height: "692px",boxShadow: "0 12px 14px rgba(0,0,0,0.4)", borderRadius: "0 0 20px 20px" }}>
            <ul className='mt-4'>
              <li>{firstAsset.title}</li>
              <li>{second.title}</li>
              <li>{third.title}</li>
              <li>{forth.title}</li>
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
