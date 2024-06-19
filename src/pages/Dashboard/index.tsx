import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import './style-dashboard.css';
const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        {/* Main */}
        <Breadcrumb pageName="Ana səhifə" />

        {/* <!-- Main content --> */}
        <div className="py-4">
          <div className="row">
            <div className="col-12	col-sm-6	col-md-3	col-lg-2	col-xl-2 mb-2">
              <div className="info-box flex items-center gap-[10px] bg-white rounded-[4px] min-h-[80px] p-[8px] shadow-[0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)]">
                <div className="bg-[#17a2b8]  w-17 h-16 rounded-3 flex items-center justify-center text-white text-[1.85rem] ">
                  <i className="fas fa-newspaper"></i>
                </div>
                <div className="">
                  <p className="lineClamp">Cəmi material</p>
                  <p>200</p>
                </div>
              </div>
            </div>

            <div className="col-12	col-sm-6	col-md-3	col-lg-2	col-xl-2 mb-2">
              <div className="info-box flex items-center gap-[10px] bg-white rounded-[4px] min-h-[80px] p-[8px] shadow-[0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)]">
                <div className="bg-[#dc3545]  w-17 h-16 rounded-3 flex items-center justify-center text-white text-[1.85rem] ">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <p className="lineClamp">Müəllif</p>
                  <p>200</p>
                </div>
              </div>
            </div>

            <div className="col-12	col-sm-6	col-md-3	col-lg-2	col-xl-2 mb-2">
              <div className="info-box flex items-center gap-[10px] bg-white rounded-[4px] min-h-[80px] p-[8px] shadow-[0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)]">
                <div className="bg-[#17a2b8]  w-17 h-16 rounded-3 flex items-center justify-center text-white text-[1.85rem] ">
                  <i className="fas fa-file"></i>
                </div>
                <div>
                  <p className="lineClamp">
                    Texniki yoxlamadan keçmiş materiallar
                  </p>
                  <p>200</p>
                </div>
              </div>
            </div>

            <div className="col-12	col-sm-6	col-md-3	col-lg-2	col-xl-2 mb-2">
              <div className="info-box flex items-center gap-[10px] bg-white rounded-[4px] min-h-[80px] p-[8px] shadow-[0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)]">
                <div className="bg-[#28a745]  w-17 h-16 rounded-3 flex items-center justify-center text-white text-[1.85rem] ">
                  <i className="fas fa-circle-check"></i>
                </div>
                <div>
                  <p className="lineClamp">Təsdiqlənmiş materiallar</p>
                  <p>200</p>
                </div>
              </div>
            </div>

            <div className="col-12	col-sm-6	col-md-3	col-lg-2	col-xl-2 mb-2">
              <div className="info-box flex items-center gap-[10px] bg-white rounded-[4px] min-h-[80px] p-[8px] shadow-[0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2)]">
                <div className="bg-[#ffc107]  w-17 h-16 rounded-3 flex items-center justify-center text-white text-[1.85rem] ">
                  <i className="fas fa-comment"></i>
                </div>
                <div>
                  <p className="lineClamp">Cəmi rəy</p>
                  <p>200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
