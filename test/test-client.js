import ReactDom from 'react-dom'
import React from 'react'
import VerticalTimelineScroller from '../lib/vertical-timeline-scroller.jsx'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

const style = {
    height: '100vh',
    width: '200px',
    background: 'red',
    float: 'right',
    margin: 0,
    padding: 0
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fromDate: moment('2014-01-01T00:00:00.000'),
            toDate: moment('2016-01-01T00:00:00.000')
        }
    }

    render() {
        return(
        <div>
        <div style={style}><VerticalTimelineScroller from={this.state.fromDate} to={this.state.toDate}/></div>
        <div style={{width: '100%', marginTop: '20px'}}>

            <span style={{ marginLeft: '20px' }}>
            From: <DatePicker selected={this.state.fromDate} onChange={(v) => this.setState({ fromDate: v })}  forceShowMonthNavigation={true} />
            </span>
            <span style={{ marginLeft: '20px'}}>
            To: <DatePicker selected={this.state.toDate} onChange={(v) => this.setState({ toDate: v })} forceShowMonthNavigation={true} />
            </span>
        </div>
        </div>)
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
/*
      <div style={{ display: 'flex', flexDirection: 'row', flex: '1 1 auto', height: '500px' }} >
        <div style={{ background: 'red', width: '500px' }}><DatePicker selected={moment()}/></div>
        <div style={{ background: 'blue', width: '500px' }}><DatePicker/></div>
      </div>
*/
