import React, { useEffect, useState } from 'react';
import './RemainingDays.css';

const RemainingDays = () => {
    const [days, setDays] = useState(0);
    const [fillPercentage, setFillPercentage] = useState(100);

    useEffect(() => {
        // The wedding date: March 25, 2026
        const targetDate = new Date('2026-03-25T00:00:00').getTime();
        // Start tracking from engagement date (Jan 30, 2026)
        const startDate = new Date('2026-01-30T00:00:00').getTime();
        const today = new Date().getTime();

        // Calculate remaining days
        const diffTime = targetDate - today;
        const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
        setDays(diffDays);

        // Calculate percentage filled
        const totalDuration = targetDate - startDate;
        const passedDuration = today - startDate;

        let percentage = 0;
        if (totalDuration > 0) {
            percentage = (passedDuration / totalDuration) * 100;
        }

        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        // Invert for clip-path inset from bottom (inset(100% 0 0 0) means empty, inset(0% 0 0 0) means full)
        const insetPercentage = 100 - percentage;
        setFillPercentage(insetPercentage);
    }, []);

    return (
        <div className="remaining-days-container">
            <div className="heart-progress" style={{ '--fill-amount': `${fillPercentage}%` }}>
                <svg viewBox="0 0 24 24" className="heart-outline-svg">
                    {/* Heart Outline that connects */}
                    <path
                        className="heart-outline"
                        pathLength="100"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </svg>
                <svg viewBox="0 0 24 24" className="heart-fill-svg">
                    {/* Heart Fill that grows day by day via clip-path */}
                    <path
                        className="heart-fill"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </svg>
                <div className="days-number">
                    {days > 0 ? days : '0'}
                </div>
            </div>
            <div className="days-label">
                {days > 0 ? (days === 1 ? 'Day to Go' : 'Days to Go') : 'Happily Married!'}
            </div>
        </div>
    );
};

export default RemainingDays;
