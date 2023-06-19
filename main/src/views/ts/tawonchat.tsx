import { ResponsiveRadar } from '@nivo/radar'
import React from 'react';

const Tawonechat = () => {
 const data = [
    {
      "taste": "fruity",
      "chardonay": 117,
      "carmenere": 68,
      "syrah": 91
    },
    {
      "taste": "bitter",
      "chardonay": 74,
      "carmenere": 118,
      "syrah": 24
    },
    {
      "taste": "heavy",
      "chardonay": 88,
      "carmenere": 56,
      "syrah": 46
    },
    {
      "taste": "strong",
      "chardonay": 113,
      "carmenere": 99,
      "syrah": 45
    },
    {
      "taste": "sunny",
      "chardonay": 119,
      "carmenere": 107,
      "syrah": 107
    }
  ]
  return (
    <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
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