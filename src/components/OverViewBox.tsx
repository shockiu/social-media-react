import { IOverViewStats } from '../constants/index';
import { takeClass } from '../helpers/addClass';
// Style
import '../styles/main.scss';

export const OverView = (props: { overView: IOverViewStats }) => {
    const { overView } = props;
  
    return (
        <div className="overview-stats__box" >
            <div className="overview-stats__resume">
                <p className="overview-stats__subject">
                    {overView.subject}
                </p>
                <img src={overView.icon} alt="" height="20" width="20" />
                </div>
                <div className="overview-stats__resume">
                <p className="overview-stats__today">
                    {overView.statsToday}
                </p>
                <p className="overview-percent__today">
                    <img src={overView.positive ? '/images/icon-up.svg' : '/images/icon-down.svg'} 
                        alt="" 
                        height="6" 
                        width="10" />
                    <span className={takeClass(
                        {   
                            mainClass: 'social-numbers',
                            conditionClass: overView.positive,
                            firstClass: 'social-numbers--positive', 
                            secondClass: 'social-numbers--negative'
                        })}>
                        {overView.percent}
                    </span>
                </p>
            </div>
        </div>
    )
}