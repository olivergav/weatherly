import ReactECharts from 'echarts-for-react';

function WeatherForecastChart({forecast}) {

    function formatterXAxisLabel(value, index) {
        const date = new Date(value);

        return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`
    }

    return (
        <>
            <ReactECharts
                option={{
                    legend: {
                        data: ['Temperature', 'Rain'],
                        right: '10%',
                        textStyle: {
                            fontSize: 14,
                        },
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: forecast.map((day) => day.date),
                            axisLabel: {
                                formatter: formatterXAxisLabel,
                                fontSize: 14,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: Math.round(Math.max(...forecast.map((day) => day.day.avgtemp_c)) * 1.3),
                            axisLabel: {
                                formatter: '{value} ℃',
                                fontSize: 14,
                            },
                            splitLine: {
                                show: false,
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['rgba(255,255,255,0.3)', 'rgba(200,200,200,0.1)'],
                                },
                            },
                        },
                        {
                            type: 'value',
                            min: 0,
                            max: Math.round(Math.max(...forecast.map((day) => day.day.totalprecip_mm)) * 1.3),
                            axisLabel: {
                                formatter: '{value} mm',
                                fontSize: 14,
                            },
                        },
                    ],
                    series: [
                        {
                            name: 'Temperature',
                            data: forecast.map((day) => day.day.avgtemp_c),
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                color: '#1869b7',
                                width: 2,
                            },
                            itemStyle: {
                                color: '#1869b7',
                            },
                        },
                        {
                            name: 'Rain',
                            type: 'bar',
                            data: forecast.map((day) => day.day.totalprecip_mm),
                            yAxisIndex: 1,
                            itemStyle: {
                                color: '#A4A4A4',
                            },
                        },

                    ]
                }}
            />
        </>
    )
}

export default WeatherForecastChart;