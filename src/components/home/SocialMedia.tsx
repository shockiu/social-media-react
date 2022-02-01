import { SocialMediaBox } from '../SocialMediaBox';
import { OverView } from '../OverViewBox';
import { userStatsToday, overViewStats } from '../../mock/UserGeneralStats';
import '../../styles/main.scss';

export const SocialMediaDash = () => {
    return (
        <main className="social-media">
            <div className="main-social-media">
                {userStatsToday.map((userData, index) => {
                    return (
                        <SocialMediaBox userStats={userData} key={index}/>
                    )
                })}
            </div>
            <p className="overview-title">
                Overview - Today
            </p>
            <div className="overview-stats">
                {overViewStats.map((stats, index) => {
                    return (
                        <OverView overView={stats} key={index+'c'}/>
                    )
                })}
            </div>
        </main>
    )
}