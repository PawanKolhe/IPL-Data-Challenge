import React from 'react';
import './info-box.styles.css';

class InfoBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            title: this.props.title,
            text: this.props.text,
            icon: this.props.icon
        }
    }

    componentWillReceiveProps(){
        this.setState({
            data: this.props.data,
            title: this.props.title,
            text: this.props.text,
            icon: this.props.icon
        });
    }

    static defaultProps = {
        data: 0,
        title: 'Title',
        text: 'Some description',
        icon: <i class="fas fa-cricket fa-4x"></i>
    }

    render(){
        return(
            <div className='infobox'>
                <div className='infobox-title'>
                    <p>{this.state.title}</p>
                </div>
                <div className='infobox-text'>
                    <p>{this.state.text}</p>
                </div>
                <div className='infobox-content'>
                    <div className='infobox-data'>
                        {this.state.data}
                    </div>
                </div>
                <div className='infobox-icon'>
                    {this.state.icon}
                </div>
            </div>
        )
    }
}

export default InfoBox;