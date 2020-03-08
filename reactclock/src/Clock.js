import React from 'react';

class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            time: "00:00:00",
            amPm: "am"
        }
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount() {
        this.loadInterval = setInterval(
            this.getTime, 1000
        );
    }

    getTime() {
        const takeTwelve = n => n > 12 ? n - 12 : n, addZero = n => n < 10 ? "0" + n: n;

        setInterval(() => {
            let d, h, m, s, t, amPm;
            d = new Date();
            h = addZero(takeTwelve(d.getHours()));
            m = addZero(d.getMinutes());
            s = addZero(d.getSeconds());
            t = `${h}:${m}:${s}`;
            amPm = d.getHours() >= 12 ? "pm" : "am";

            this.setState({
                time: t,
                amPm: amPm
            });

        }, 1000);
    }



    render() {
        return(
            <div className="outer">
                <div className="inner">
                    <div className="most-inner">
                        <span className="time">
                            {this.state.time}
                        </span>
                        <span className="amPm">
                            {this.state.amPm}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;