export interface IStatsToday {
    user: string;
    stats: string;
    icon: string;
    subject: string;
    positive: boolean;
    statsToday: string;
}

export interface IOverViewStats {
    subject: string;
    icon: string;
    statsToday: string;
    positive: boolean;
    percent: string;
}