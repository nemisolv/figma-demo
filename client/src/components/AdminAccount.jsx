import React, { useEffect, useState } from 'react';
import Table from './table';
import { Link } from 'react-router-dom';
import {  getAccounts } from '@services/account.service';
import { toast } from 'react-toastify';
import TableAccounts from './tableAccounts';

const AdminListAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await getAccounts();
        if (res.data.length === 0) {
          toast.info('Danh sách tài khoản rỗng');
        } else {
          setAccounts(res.data);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="  bg-gray-200 p-4 h-screen">
      <div className="flex-grow m-16 flex flex-col">
        <div className="flex items-center justify-between my-12">
          <h2 className="text-4xl font-bold">Danh sách tài khoản</h2>
        
        </div>
        <TableAccounts accounts={accounts} setAccounts={setAccounts} />
      </div>
    </div>
  );
};

export default AdminListAccounts;
