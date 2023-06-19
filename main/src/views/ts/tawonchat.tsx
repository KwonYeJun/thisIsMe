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
        margin={{ top: 70, right: 80, bottom: 45, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={20}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={3}
        colors={{ scheme: 'set3' }}
        fillOpacity={0.2}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#3B56D3',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#3B56D3'
                        }
                    }
                ]
            }
        ]}
    />
  )

}
export default Tawonechat;