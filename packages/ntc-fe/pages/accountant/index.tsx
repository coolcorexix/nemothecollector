import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AccountantPage(props) {
  const { data, error } = useSWR('/api/loadSheet', fetcher);
  if (!data) return <div>loading...</div>;
  return (
    <div>
      Accountant
      <br />
      <span>{data.totalWorth}</span>
    </div>
  );
}

export default AccountantPage;
