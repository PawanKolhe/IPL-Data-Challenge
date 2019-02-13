import React from 'react';
import './content.css';
import Papa from 'papaparse';

import ChartDisplay from './ChartDisplay';
import InfoBox from './InfoBox';


class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            dataLoadedMatch: false,
            dataLoadedPlayer: false,
            dataLoadedBallByBall: false,
            chartData2: {},
            chartData3: {},
            chartData4: {},
            chartData5: {},
            chartData6: {},
            chartData7: {},
            chartData8: {},
            rawMatch: {},
            rawPlayer: {},
            rawBallByBall: {}
            /*rawSeason: {},
            rawTeam: {},
            rawPlayerMatch: {},*/
        };
        this.saveMatch = this.saveMatch.bind(this);
        this.savePlayer = this.savePlayer.bind(this);
        this.saveBallByBall = this.saveBallByBall.bind(this);
        /*this.saveSeason = this.saveSeason.bind(this);
        this.saveTeam = this.saveTeam.bind(this);
        this.savePlayerMatch = this.savePlayerMatch.bind(this);*/
        this.dataForChart1 = this.dataForChart1.bind(this);
        this.dataForChart2 = this.dataForChart2.bind(this);
        this.dataForChart3 = this.dataForChart3.bind(this);
        this.dataForChart4 = this.dataForChart4.bind(this);
        this.dataForChart5 = this.dataForChart5.bind(this);
        this.dataForChart6 = this.dataForChart6.bind(this);
        this.dataForChart7 = this.dataForChart7.bind(this);
        this.dataForChart8 = this.dataForChart8.bind(this);
        this.dataForInfoBox1 = this.dataForInfoBox1.bind(this);
        this.dataForInfoBox2 = this.dataForInfoBox2.bind(this);
        this.dataForInfoBox3 = this.dataForInfoBox3.bind(this);
        this.dataForInfoBox4 = this.dataForInfoBox4.bind(this);
    }

    componentWillMount(){
        this.getChartData();
    }

    dataForChart1(){
        // Bat or Field Decision
        var batCount = 0;
        if(this.state.dataLoadedMatch){
            for(var i = 0; i < this.state.rawMatch.data.length; i++){
                if(this.state.rawMatch.data[i].Toss_Decision === "bat"){
                    batCount++;
                }
            }

            this.setState({
                chartData1: {
                    labels: ['Bat', 'Field'],
                    datasets: [
                        {
                            label: 'Bat or Field Decision',
                            data: [batCount, this.state.rawMatch.data.length - batCount],
                            backgroundColor: [
                                'rgba(121, 85, 72, 0.5)',
                                'rgba(76, 175, 80, 0.5)'
                            ],
                            borderColor: [
                                'rgba(121, 85, 72,1)',
                                'rgba(76, 175, 80, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart2(){
        // Host Countries
        var countries = [];
        var i;
        if(this.state.dataLoadedMatch){
            for(i = 0; i < this.state.rawMatch.data.length - 1; i++){
                countries.push(this.state.rawMatch.data[i].Host_Country);
            }

            // Finds the unique values of array (a) and occurrence of each value (b)
            var a = [], b = [], prev;
            countries.sort();
            for (i = 0; i < countries.length; i++) {
                if ( countries[i] !== prev ) {
                    a.push(countries[i]);
                    b.push(1);
                    
                } else {
                    b[b.length-1]++;
                }
                prev = countries[i];
            }

            this.setState({
                chartData2: {
                    labels: [...a],
                    datasets: [
                        {
                            label: 'Host Countries',
                            data: [...b],
                            backgroundColor: [
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)'
                            ],
                            borderColor: [
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart3(){
        // Result Type
        var winType = [];
        var i;
        if(this.state.dataLoadedMatch){
            for(i = 0; i < this.state.rawMatch.data.length - 1; i++){
                winType.push(this.state.rawMatch.data[i].Win_Type);
            }

            // Finds the unique values of array (a) and occurrence of each value (b)
            var a = [], b = [], prev;
            winType.sort();
            for (i = 0; i < winType.length; i++) {
                if ( winType[i] !== prev ) {
                    a.push(winType[i]);
                    b.push(1);
                    
                } else {
                    b[b.length-1]++;
                }
                prev = winType[i];
            }

            this.setState({
                chartData3: {
                    labels: [...a],
                    datasets: [
                        {
                            label: 'Result Type',
                            data: [...b],
                            backgroundColor: [
                                'rgba(58, 55, 52,0.5)',
                                'rgba(9, 168, 250,0.5)',
                                'rgba(255, 193, 7, 0.5)',
                                'rgba(255, 87, 34,0.5)'
                            ],
                            borderColor: [
                                'rgba(58, 55, 52,1.0)',
                                'rgba(9, 168, 250.0)',
                                'rgba(255, 193, 7, 1)',
                                'rgba(255, 87, 34,1.0)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart4(){
        // Left or Right Handed Batsmen
        var handType = [];
        var i;
        if(this.state.dataLoadedPlayer){
            for(i = 0; i < this.state.rawPlayer.data.length - 1; i++){
                handType.push(this.state.rawPlayer.data[i].Batting_Hand);
            }

            // Finds the unique values of array (a) and occurrence of each value (b)
            var a = [], b = [], prev;
            handType.sort();
            for (i = 0; i < handType.length; i++) {
                if ( handType[i] !== prev && handType[i] !== 'NULL') {
                    a.push(handType[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = handType[i];
            }

            this.setState({
                chartData4: {
                    labels: [...a],
                    datasets: [
                        {
                            label: 'Left or Right Handed Batsmen',
                            data: [...b],
                            backgroundColor: [
                                'rgba(244, 67, 54, 0.5)',
                                'rgba(9, 98, 234, 0.5)'
                            ],
                            borderColor: [
                                'rgba(244, 67, 54,1)',
                                'rgba(9, 98, 234, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart5(){
        // Bowling Skill
        var bowlingSkill = [];
        var i;
        if(this.state.dataLoadedPlayer){
            for(i = 0; i < this.state.rawPlayer.data.length - 1; i++){
                bowlingSkill.push(this.state.rawPlayer.data[i].Bowling_Skill);
            }

            // Finds the unique values of array (a) and occurrence of each value (b)
            var a = [], b = [], prev;
            bowlingSkill.sort();
            for (i = 0; i < bowlingSkill.length; i++) {
                if ( bowlingSkill[i] !== prev && bowlingSkill[i] !== 'NULL') {
                    a.push(bowlingSkill[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = bowlingSkill[i];
            }

            this.setState({
                chartData5: {
                    labels: [...a],
                    datasets: [
                        {
                            label: 'Bowling Skill',
                            data: [...b],
                            backgroundColor: [
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136,0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)'
                            ],
                            borderColor: [
                                'rgba(0, 150, 136,1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136,1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136,1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart6(){
        // Player Nationality
        var nationality = [];
        var i;
        if(this.state.dataLoadedPlayer){
            for(i = 0; i < this.state.rawPlayer.data.length - 1; i++){
                nationality.push(this.state.rawPlayer.data[i].Country);
            }

            // Finds the unique values of array (a) and occurrence of each value (b)
            var a = [], b = [], prev;
            nationality.sort();
            for (i = 0; i < nationality.length; i++) {
                if ( nationality[i] !== prev && this.state.rawPlayer.data[i].Is_Umpire !== '1') {
                    a.push(nationality[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = nationality[i];
            }

            this.setState({
                chartData6: {
                    labels: [...a],
                    datasets: [
                        {
                            label: 'Player Nationality',
                            data: [...b],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(255,99,132,0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(245, 135, 31, 1)',
                                'rgba(128, 203, 174, 1)',
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(245, 135, 31, 1)',
                                'rgba(128, 203, 174, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart7(){
        // Average runs per over
        var i = 0, j = 0;
        var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0, seven = 0, eight = 0, nine = 0, ten = 0, eleven = 0, twelve = 0, thirteen = 0, fourteen = 0, fifteen = 0, sixteen = 0, seventeen = 0, eighteen = 0, ninteen = 0, twenty = 0;
        var overs = [];
        var result = [];
        var bigInt = require("big-integer");

        if(this.state.dataLoadedBallByBall){
            for(i = 0; i < this.state.rawBallByBall.data.length - 1; i++){
                if(this.state.rawBallByBall.data[i].Batsman_Scored !== 'Do_nothing'){
                    switch(Number(this.state.rawBallByBall.data[i].Over_Id)){
                        case 1:
                            one = bigInt(one).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 2:
                            two = bigInt(two).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 3:
                            three = bigInt(three).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 4:
                            four = bigInt(four).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 5:
                            five = bigInt(five).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 6:
                            six = bigInt(six).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 7:
                            seven = bigInt(seven).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 8:
                            eight = bigInt(eight).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 9:
                            nine = bigInt(nine).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 10:
                            ten = bigInt(ten).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 11:
                            eleven = bigInt(eleven).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 12:
                            twelve = bigInt(twelve).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 13:
                            thirteen = bigInt(thirteen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 14:
                            fourteen = bigInt(fourteen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 15:
                            fifteen = bigInt(fifteen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 16:
                            sixteen = bigInt(sixteen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 17:
                            seventeen = bigInt(seventeen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 18:
                            eighteen = bigInt(eighteen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 19:
                            ninteen = bigInt(ninteen).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        case 20:
                            twenty = bigInt(twenty).plus(this.state.rawBallByBall.data[i].Batsman_Scored);
                            break;
                        default:
                            break;
                    }
                }
                
            }

            for(i = 0; i < this.state.rawBallByBall.data.length - 1; i++){
                overs.push(this.state.rawBallByBall.data[i].Over_Id);
            }
            // Finds the unique values of array (a) and occurrence of each value (b)
            var a = [], b = [], prev;
            overs.sort(function(x,y){
                return x - y
            });
            for (i = 0; i < overs.length; i++) {
                if ( overs[i] !== prev) {
                    a.push(overs[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = overs[i];
            }

            result.push(one);
            result.push(two);
            result.push(three);
            result.push(four);
            result.push(five);
            result.push(six);
            result.push(seven);
            result.push(eight);
            result.push(nine);
            result.push(ten);
            result.push(eleven);
            result.push(twelve);
            result.push(thirteen);
            result.push(fourteen);
            result.push(fifteen);
            result.push(sixteen);
            result.push(seventeen);
            result.push(eighteen);
            result.push(ninteen);
            result.push(twenty);

            for(j = 0 ; j < 20; j++){
                result[j] /= b[j]
            }

            this.setState({
                chartData7: {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20],
                    datasets: [
                        {
                            label: 'Average Runs Every Over',
                            data: [...result],
                            backgroundColor: [
                                'rgba(103, 58, 183, 0.5)'
                            ],
                            borderColor: [
                                'rgba(103, 58, 183,1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart8(){
        // Types of Dismissals
        var dismissalType = [];
        var i;
        if(this.state.dataLoadedBallByBall){
            for(i = 0; i < this.state.rawBallByBall.data.length - 1; i++){
                dismissalType.push(this.state.rawBallByBall.data[i].Dissimal_Type);
            }

            var a = [], b = [], prev;
            dismissalType.sort();
            for (i = 0; i < dismissalType.length; i++) {
                if ( dismissalType[i] !== prev && dismissalType[i] !== ' ') {
                    a.push(dismissalType[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = dismissalType[i];
            }

            this.setState({
                chartData8: {
                    labels: [...a],
                    datasets: [
                        {
                            label: 'Types of Dismissals',
                            data: [...b],
                            backgroundColor: [
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99,0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)'
                            ],
                            borderColor: [
                                'rgba(233, 30, 99,1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99,1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForInfoBox1(){
        // Number of Matches
        if(this.state.dataLoadedMatch){
            this.setState({
                infoBox1: this.state.rawMatch.data.length - 1
            });
            this.forceUpdate();
        }
    }

    dataForInfoBox2(){
        // Number of Superovers
        var superovers = 0;

        if(this.state.dataLoadedMatch){
            for(var i = 0; i < this.state.rawMatch.data.length; i++){
                if(this.state.rawMatch.data[i].IS_Superover === 1){
                    superovers++;
                }
            }

            this.setState({
                infoBox2: superovers
            });
            this.forceUpdate();
        }
    }

    dataForInfoBox3(){
        // Number of Fours
        var fours = 0;

        if(this.state.dataLoadedBallByBall){
            for(var i = 0; i < this.state.rawBallByBall.data.length; i++){
                if(this.state.rawBallByBall.data[i].Batsman_Scored === 4){
                    fours++;
                }
            }
            
            this.setState({
                infoBox3: fours
            });
            this.forceUpdate();
        }
    }

    dataForInfoBox4(){
        // Number of Sixes
        var sixes = 0;

        if(this.state.dataLoadedBallByBall){
            for(var i = 0; i < this.state.rawBallByBall.data.length; i++){
                if(this.state.rawBallByBall.data[i].Batsman_Scored === 6){
                    sixes++;
                }
            }
            
            this.setState({
                infoBox4: sixes
            });
            this.forceUpdate();
        }
    }

    // Converting CSV file to JSON data
    getChartData(){
        Papa.parse('./ipl-csv-dataset/Match.csv', {header: true, download: true, dynamicTyping: false, complete: this.saveMatch});
        Papa.parse('./ipl-csv-dataset/Player.csv', {header: true, download: true, dynamicTyping: false, complete: this.savePlayer});
        Papa.parse('./ipl-csv-dataset/Ball_by_Ball.csv', {header: true, download: true, dynamicTyping: false, complete: this.saveBallByBall});
        /*Papa.parse('./ipl-csv-dataset/Season.csv', {header: true, download: true, dynamicTyping: true, complete: this.saveSeason});
        Papa.parse('./ipl-csv-dataset/Team.csv', {header: true, download: true, dynamicTyping: true, complete: this.saveTeam});
        Papa.parse('./ipl-csv-dataset/Player_Match.csv', {header: true, download: true, dynamicTyping: true, complete: this.savePlayerMatch});*/
    }

    // Saving JSON data to state
    saveMatch(result){this.setState({rawMatch: result, dataLoadedMatch: true});this.dataForChart1();this.dataForChart2();this.dataForChart3();this.dataForInfoBox1();this.dataForInfoBox2();}
    savePlayer(result){this.setState({rawPlayer: result, dataLoadedPlayer: true});this.dataForChart4();this.dataForChart5();this.dataForChart6();}
    saveBallByBall(result){this.setState({rawBallByBall: result, dataLoadedBallByBall: true});this.dataForChart7();this.dataForChart8();this.dataForInfoBox3();this.dataForInfoBox4();}
    /*saveSeason(result){this.setState({rawSeason: result});}
    saveTeam(result){this.setState({rawTeam: result});}
    savePlayerMatch(result){this.setState({rawPlayerMatch: result});}*/

    render() {
        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;
        /*y = w.innerHeight|| e.clientHeight|| g.clientHeight;*/

        return (
            <div className='content-container'>
                <div className='infobox-container'>
                    <InfoBox data={this.state.infoBox1} title='Total Matches' icon={<i class="fas fa-cricket fa-4x"></i>} text='Matches played till now.' />
                    <InfoBox data={this.state.infoBox2} title='Total Superovers' icon={<i class="fas fa-cricket fa-4x"></i>} text='Number of tie matches till now.' />
                    <InfoBox data={this.state.infoBox3} title='Total Fours' icon={<i class="fas fa-cricket fa-4x"></i>} text='Number of balls hitting the boundary.'  />
                    <InfoBox data={this.state.infoBox4} title='Total Sixes' icon={<i class="fas fa-cricket fa-4x"></i>} text='Number of balls crossing the boundary.'  />
                </div>
                <div className='graph-container'>
                    <ChartDisplay selectChart='line' chartData={this.state.chartData7} titleText='Average Runs Every Over' selectLabel={true} selectLabelText='Overs' />
                    <ChartDisplay selectChart='bar' displayLegend={false} chartData={this.state.chartData1} titleText='Batting / Fielding Decision' />
                    <ChartDisplay selectChart='doughnut' chartData={this.state.chartData3} titleText='Result Type'  />
                    <ChartDisplay selectChart='pie' chartData={this.state.chartData2} titleText='Matches Hosted By Country' />
                    <ChartDisplay selectChart='pie' chartData={this.state.chartData4} titleText='Left / Right Handed Batsmen' />
                    <ChartDisplay selectChart='horizontalBar' displayLegend={false} chartData={this.state.chartData5} titleText='Bowling Skill' />
                    <ChartDisplay selectChart='horizontalBar' displayLegend={false} chartData={this.state.chartData6} titleText='Player Nationality' />
                    <ChartDisplay selectChart={x < 900 ? 'horizontalBar' : 'bar'} displayLegend={false} chartData={this.state.chartData8} titleText='Player Dismissal Types' />
                </div>
            </div>
            
            
        )
    }
}

export default Content;