import Card from '../Card/Card'
import './Chart.scss'
import ChartBar from './ChartBar'

const Chart = (props : any) => {
    const dataPointValues = props.dataPoints.map((dataPoint : any) => {return dataPoint.value})
    const maxValue = Math.max(...dataPointValues)

    return (
        <Card>
            <div className='chart'>
                {props.dataPoints.map((dataPoint : any) =>
                <ChartBar
                key={dataPoint.label} 
                value={dataPoint.value}
                maxValue={maxValue}
                label={dataPoint.label} />)}
            </div>
        </Card>
    )
}

export default Chart