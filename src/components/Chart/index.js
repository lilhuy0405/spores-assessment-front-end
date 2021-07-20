import {useThemeState} from "../../state/theme";
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
//import Chart from 'react-apexcharts'
//TODO: fix css not loaded cause breaklayout => consider to use highChart
export function DashBoardChart({chartOptions}) {
    const isDarkMode = useThemeState()

    return (
        <ApexCharts
            options={isDarkMode ? {
                ...chartOptions.options,
                theme: {mode: 'dark'}
            } : {
                ...chartOptions.options,
                theme: {mode: 'light'}
            }}
            series={chartOptions.series}
            type='line'
            height='100%'
        />
    )


}