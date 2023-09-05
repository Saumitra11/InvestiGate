import DashboardBox from '@/components/DashboardBox';
import React from 'react'

interface Props {
    
}

const Row3 = (props: Props) => {
    return (
      <div>
        <>
          <DashboardBox gridArea="g"></DashboardBox>
          <DashboardBox gridArea="h"></DashboardBox>
          <DashboardBox gridArea="i"></DashboardBox>
          <DashboardBox gridArea="j"></DashboardBox>
        </>
      </div>
    );
}

export default Row3
