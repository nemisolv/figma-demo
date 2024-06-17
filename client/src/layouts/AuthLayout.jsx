import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="bg-[#f0f2f5] h-screen flex-center">
    <Outlet />
    </main>
  );
}

export default AuthLayout;
