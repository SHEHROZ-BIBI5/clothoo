 const Banner = () => {
  return (
    <div
      style={{
        height: '40px',
        backgroundColor: '#111126',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 60,
      }}
     >
          <div className="relative isolate flex items-center justify-center gap-x-4 overflow-hidden bg-[#111126] px-6 py-2.5 sm:px-3.5 mt-0">
     <div className="flex flex-wrap text-center items-center gap-x-4 gap-y-2 text-white text-base sm:text-sm">
       ⚡ Flash Sale: 60% Off + Fast Shipping USA & Canada 🇺🇸 🇨🇦
        </div>
        </div>
        </div>
   );
};

export default Banner;

