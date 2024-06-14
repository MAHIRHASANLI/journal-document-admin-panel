import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { NavLink } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl text-black font-normal">Ana səhifə</h2>
          </div>
          <div className="flex justify-between">
            <NavLink to="/" className="text-cyan-500">
              Dashboard
            </NavLink>{' '}
            <span>/</span> <p>Ana səhifə</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
