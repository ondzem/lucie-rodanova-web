import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutVision from './components/AboutVision'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import GDPRPage from './components/GDPRPage'
import ErrorPage from './components/ErrorPage'

function App() {
    const [currentView, setCurrentView] = useState('home')
    const [isNotFound, setIsNotFound] = useState(false)

    useEffect(() => {
        // Native 404 Routing for SPA
        if (window.location.pathname !== '/' && window.location.pathname !== '') {
            setIsNotFound(true)
        }

        const handleOpenGDPR = () => setCurrentView('gdpr')
        const handleCloseGDPR = () => setCurrentView('home')

        window.addEventListener('openGDPR', handleOpenGDPR)
        window.addEventListener('closeGDPR', handleCloseGDPR)

        return () => {
            window.removeEventListener('openGDPR', handleOpenGDPR)
            window.removeEventListener('closeGDPR', handleCloseGDPR)
        }
    }, [])

    if (isNotFound) {
        return <ErrorPage />
    }

    if (currentView === 'gdpr') {
        return <GDPRPage onClose={() => setCurrentView('home')} />
    }

    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <AboutVision />
            <Testimonials />
            <Team />
            <ContactForm />
            {/* <Blog /> */}
            <Footer />
            <CookieConsent />
        </div>
    )
}

export default App
