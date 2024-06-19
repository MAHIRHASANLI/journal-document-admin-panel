import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[360px] border-t-[3px]  border-[#007bff] rounded-[5px] text-center bg-white shadow">
        <div className="border-b-[1px]  border-b-[rgba(0,0,0,0.125)]  p-[20px]">
          <Link to="/" className="text-[36px] text-[black] font-[500]">
            <b className="m-0">AzTU</b>Giriş
          </Link>
        </div>
        <div className="py-[16px]  px-[20px]">
          <p className="text-[16px] text-[#212529] font-[400]">
            Zəhmət olmasa hesaba daxil olun{' '}
          </p>
          <form className="mt-3">
            {/* Inpu Group */}
            <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4">
              <input
                placeholder="Email"
                type="text"
                className="w-[100%] py-[6px] px-[12px]
                focus:border-[#007bff] focus:border-[1px] focus:py-[5px] focus:px-[11px]
                outline-none
                "
              />
              <div className="py-[6px] px-[12px] bg-[#e9ecef] text-[#495057]">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4">
              <input
                placeholder="Şifrə"
                type="password"
                className="w-[100%] py-[6px] px-[12px]
                focus:border-[#007bff] focus:border-[1px] focus:py-[5px] focus:px-[11px]
                outline-none
                "
              />
              <div className="py-[6px] px-[12px] bg-[#e9ecef] text-[#495057]">
                <i className="fas fa-lock"></i>
              </div>
            </div>
            {/* Button */}
            <div className="row">
              <div className="col-8"></div>
              <div className="col-4">
                <button className="btn btn-primary btn-block w-[100%] bg-[#446ccf] hover:bg-[#446ccf]">
                Giriş
                </button>
              </div>
            </div>
          </form>
          <div className="text-start my-2">
            <Link to="../auth/signin" className="text-[#446ccf]">
              Hesabınız yoxdur? Hesab aç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
