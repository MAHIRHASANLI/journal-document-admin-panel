import React from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[700px] border-t-[3px]  border-[#007bff] rounded-[5px] text-center bg-white shadow">
        <div className="border-b-[1px]  border-b-[rgba(0,0,0,0.125)]  p-[20px]">
          <Link to="/" className="text-[36px] text-[black] font-[500]">
            <b className="m-0">AzTU</b>Qeydiyyat
          </Link>
        </div>
        <div className="py-[16px]  px-[20px]">
          <p className="text-[16px] text-[#212529] font-[400]">
            Elmi-Metodiki şuradan qeydiyyatdan keçin
          </p>
          <form className="mt-3">
            <div className="flex justify-between gap-[16px]">
              <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4">
                <input
                  placeholder="Ad"
                  type="text"
                  className="w-[100%] py-[6px] px-[12px]
              focus:border-[#007bff] focus:border-[1px] focus:py-[5px] focus:px-[11px]
              outline-none
              "
                />
                <div className="py-[6px] px-[12px] bg-[#e9ecef] text-[#495057]">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4">
                <input
                  placeholder="Soyad"
                  type="text"
                  className="w-[100%] py-[6px] px-[12px]
              focus:border-[#007bff] focus:border-[1px] focus:py-[5px] focus:px-[11px]
              outline-none
              "
                />
                <div className="py-[6px] px-[12px] bg-[#e9ecef] text-[#495057]">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-[16px]">
              <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4">
                <input
                  placeholder="Ata adı"
                  type="text"
                  className="w-[100%] py-[6px] px-[12px]
              focus:border-[#007bff] focus:border-[1px] focus:py-[5px] focus:px-[11px]
              outline-none
              "
                />
                <div className="py-[6px] px-[12px] bg-[#e9ecef] text-[#495057]">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4">
                <input
                  placeholder="Email"
                  // value="@aztu.edu.az"
                  // pattern="[^\s@]{3,}@[^\s@]+\.[^\s@]+"
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
            </div>
            {/* Password input */}
            <div>
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
              {/* Qaydalar */}
              <div className="text-start">
                <ul className="text-[16px] font-[400] text-[#212529]">
                  <li className="text-[#666] mb-[5px]">
                    <i className="fa-solid fa-circle-check"></i> Kiçik və Böyük
                    hərif
                  </li>
                  <li className="text-[#666] mb-[5px]">
                    <i className="fa-solid fa-circle-check"></i> Minimum bir
                    rəqəm
                  </li>
                  <li className="text-[#666] mb-[5px]">
                    <i className="fa-solid fa-circle-check"></i> Xüsusi
                    simvollar (!@#$%^&*)
                  </li>
                  <li className="text-[#666] mb-[5px]">
                    <i className="fa-solid fa-circle-check"></i> Minimum 8
                    simvol
                  </li>
                </ul>
              </div>
              <div className="w-[100%] flex items-center justify-between border-[1px]  border-[#ced4da] rounded-[4px] mb-4 mt-4">
                <input
                  placeholder="Şifrə təkrar"
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
            </div>
            {/* Button */}
            <div className="row">
              <div className="col-8 text-start items-center">
                <input type="checkbox" id="qayda" />
                <label
                  htmlFor="qayda"
                  className="ml-2 text-[#212529] text-[16px] font-[400]"
                >
                  <Link to="" className="text-[#446ccf]">
                    Qaydaları{' '}
                  </Link>
                  qəbul edirəm
                </label>
              </div>
              <div className="col-4">
                <button className="btn btn-primary btn-block w-[100%] bg-[#446ccf] hover:bg-[#446ccf]">
                  Qeydiyyat
                </button>
              </div>
            </div>
          </form>
          <div className="text-start my-2">
            <Link to="../auth/signup" className="text-[#446ccf]">
              Hal hazırda qeydiyyatım var
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
