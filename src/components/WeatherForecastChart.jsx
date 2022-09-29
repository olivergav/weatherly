import ReactECharts from 'echarts-for-react';

function WeatherForecastChart({forecast}){

    return (
        <>
            <ReactECharts
                option={{
                    xAxis: {
                        type: 'category',
                        data: forecast.map((day) => day.date)
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: forecast.map((day) => day.day.avgtemp_c),
                            type: 'line'
                        }
                    ]
                }}
            />
        </>
    )
}

export default WeatherForecastChart;