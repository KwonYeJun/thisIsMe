import { ResponsiveRadar } from '@nivo/radar'
import React from 'react';

const Tawonechat = () => {
 const data= [
    {
      "taste": "정서안정성",
      "정성검사": 82,
    },
    {
      "taste": "개방성",
      "정성검사": 73,
    },
    {
      "taste": "성실성",
      "정성검사": 71,
    },
    {
      "taste": "원만성",
      "정성검사": 64,
    },
    {
      "taste": "외향성",
      "정성검사": 58,
    }
    ,
    {
      "taste": "정직겸손성",
      "정성검사": 63,
    }
  ]
  return (
    <ResponsiveRadar
    data={data}
    keys={[ '정성검사']}
    indexBy="taste"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor="#f5f5f5"
    gridShape="linear"
    gridLabelOffset={15}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={{ scheme: 'greys' }}
    blendMode="lighten"
    motionConfig="wobbly"
    legends={[
        {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>
  )

}
export default Tawonechat;