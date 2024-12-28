import React from "react";

function MainLayout({ children }) {
  return (
    <div className="flex h-[100vh]">
      <aside className="w-[310px] bg-[#000000] text-white h-[100vh]">
        Ong tomotn
      </aside>
      <main className="flex-grow relative">{children}</main>
      <aside className="w-[310px] bg-[#000000] text-white h-[100vh] flex justify-between py-[30px] px-[20px]">
        <div>
          <h2 className="text-gray-400 text-[15px] font-bold tracking-[0.01em] cursor-pointer">
            Friend Activity
          </h2>
        </div>
        <div>
          <button>
            <i className="fa-solid fa-user-plus text-gray-400"></i>
          </button>
          <button className="ml-5">
            <i className="fa-solid fa-x text-gray-400"></i>
          </button>
        </div>
      </aside>
    </div>
  );
}

export default MainLayout;
