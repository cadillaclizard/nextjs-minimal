'use client';

import { getDataSlow } from '@/action';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function FetchData() {
  const [data, setData] = useState();
  const params = useParams()

  async function handleSubmit() {
    const response = await getDataSlow(params);
    setData(response as any);
  }

  return (
    <form action={handleSubmit}>
      <button type="submit">Call Server Action from Client</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </form>
  );
}
