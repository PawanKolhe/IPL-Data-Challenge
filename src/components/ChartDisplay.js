import React from 'react';
import './chart.css';
import ChartComponent from 'react-chartjs-2';

class ChartDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: this.props.chartData,
            selectChart: this.props.selectChart
        }
    }

    componentWillReceiveProps(){
        this.setState({
            chartData: this.props.chartData,
            selectChart: this.props.selectChart
        });
    }

    static defaultProps = {
        selectChart: 'Bar',
        displayTitle: true,
        titleText: 'Enter a title',
        displayLegend: true,
        legendPosition: 'center',
        selectLabel: false,
        selectLabelText: ''
    }

    render(){
        return(
            <div className='chart' >
                <ChartComponent
                    type={this.state.selectChart}
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.titleText,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend
                        },
                        scales: this.props.selectChart === 'pie' || this.props.selectChart === 'doughnut' ? 
                        {
                            xAxis: [{
                                gridLineWidth: 0,
                            }],
                            yAxis: [{
                                gridLineWidth: 0,
                                minorTickInterval: null
                            }]
                        }
                        :{
                            xAxes:[{
                                scaleLabel: {
                                    display: this.props.selectLabel ? true : false,
                                    labelString: this.props.selectLabelText
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default ChartDisplay;