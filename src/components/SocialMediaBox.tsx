import { IStatsToday } from '../constants/index';
import { takeClass } from '../helpers/addClass';
// Style
import '../styles/main.scss';

export const SocialMediaBox = (props : { userStats: IStatsToday }) => {
    const { userStats } = props;

    return (
        <div className="main-social-media__box facebook-after">
            <div className="user-icon-social">
                <img src={userStats.icon} alt="" height="20" width="20" />
                <p className="main-social-media__user">{userStats.user}</p>
            </div>
            <div className="main-social-media__stats">
                {userStats.stats}
            </div>
            <div className="main-social-media__followers">
                {userStats.subject}
            </div>
            <div className="main-social-media__stats-today"> 
                <img src={userStats.positive ? '/images/icon-up.svg' : '/images/icon-down.svg'} 
                     alt="" 
                     height="6" 
                     width="10" />
                <span className={takeClass(
                    {
                        mainClass: 'social-numbers',
                        conditionClass: userStats.positive,
                        firstClass: 'social-numbers--positive', 
                        secondClass: 'social-numbers--negative'   
                    }
                )}>
                    {userStats.statsToday}
                </span>
            </div>
        </div> 
    )
}