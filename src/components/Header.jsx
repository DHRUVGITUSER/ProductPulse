import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="brand-wrapper">
                    <div className="brand-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="brand-title">ProductPulse</h1>
                        <p className="brand-subtitle">Discover amazing products</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </header>
    );
};

export default Header;