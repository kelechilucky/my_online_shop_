import React from 'react';

const Sidebar = () => {
  return (
    <div className="space-y-4 w-60">
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">CALL TO ORDER</h3>
        <p>0806677774558</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">CHAT TO ORDER ON WHATSAPP</h3>
        <p>+0806677774558</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">SEND YOUR PACKAGE</h3>
      </div>
      <div className="p-4 bg-green-100 rounded shadow">
        <h3 className="font-bold">Every Thursday Promo</h3>
        <p>Buy One Get One Free</p>
        <p className="text-sm">10% Discount with Promo Code MyOnlineShop4</p>
      </div>
    </div>
  );
};

export default Sidebar;
