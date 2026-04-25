import React, { useState } from 'react';
import { CurrentPage, UserPreferences, ScanData, ApplianceSegment } from './types';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { ScanPage } from './pages/ScanPage';
import { ProcessingPage } from './pages/ProcessingPage';
import { DiagnosisPage } from './pages/DiagnosisPage';
import { PartsComparisonPage } from './pages/PartsComparisonPage';
import { ProfessionalHelpPage } from './pages/ProfessionalHelpPage';
import { SelfRepairPage } from './pages/SelfRepairPage';
import { ProfilePage } from './pages/ProfilePage';
import { ServiceOptionsPage } from './pages/ServiceOptionsPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { BookingPage } from './pages/BookingPage';
import { QuestionaryPage } from './pages/QuestionaryPage';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('landing');
  const [pageHistory, setPageHistory] = useState<CurrentPage[]>(['landing']);
  const [selectedComponentId, setSelectedComponentId] = useState<string>('');
  const [scanData, setScanData] = useState<ScanData | null>(null);
  const [applianceSegment, setApplianceSegment] = useState<ApplianceSegment | null>(null);
  
  const [preferences, setPreferences] = useState<UserPreferences>({
    cost: 70,
    time: 30,
    effort: 50,
    priceImportance: 60,
    deliverySpeedImportance: 40
  });

  const navigateTo = (page: CurrentPage, componentId?: string) => {
    setPageHistory(prev => [...prev, page]);
    setCurrentPage(page);
    if (componentId) {
      setSelectedComponentId(componentId);
    }
  };

  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = pageHistory.slice(0, -1);
      setPageHistory(newHistory);
      setCurrentPage(newHistory[newHistory.length - 1]);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={() => navigateTo('scan')} />;
      
      case 'scan':
        return <ScanPage onSubmit={(data) => { setScanData(data); navigateTo('questionary'); }} />;

      case 'questionary':
        return (
          <QuestionaryPage
            scanData={scanData}
            onComplete={(segment) => { setApplianceSegment(segment); navigateTo('processing'); }}
          />
        );

      case 'processing':
        return <ProcessingPage />;
      
      case 'diagnosis':
        return (
          <DiagnosisPage
            preferences={preferences}
            onPreferencesChange={setPreferences}
            onSelfRepair={() => navigateTo('self-repair')}
            onProfessionalHelp={() => navigateTo('professional-help')}
            onViewParts={(componentId) => navigateTo('parts-comparison', componentId)}
          />
        );
      
      case 'parts-comparison':
        return (
          <PartsComparisonPage
            componentId={selectedComponentId}
            preferences={preferences}
            onPreferencesChange={setPreferences}
          />
        );
      
      case 'professional-help':
        return (
          <ProfessionalHelpPage
            onServiceOptions={() => navigateTo('service-options')}
          />
        );
      
      case 'self-repair':
        return (
          <SelfRepairPage
            onFindProfessional={() => navigateTo('professional-help')}
          />
        );
      
      case 'profile':
        return (
          <ProfilePage
            preferences={preferences}
            onPreferencesChange={setPreferences}
            onServiceOptions={() => navigateTo('service-options')}
          />
        );
      
      case 'service-options':
        return (
          <ServiceOptionsPage
            onConsultation={() => navigateTo('consultation')}
            onBooking={() => navigateTo('booking')}
          />
        );
      
      case 'consultation':
        return <ConsultationPage />;
      
      case 'booking':
        return <BookingPage />;
      
      default:
        return <LandingPage onGetStarted={() => navigateTo('scan')} />;
    }
  };

  // Auto-navigate from processing to diagnosis after 3 seconds
  React.useEffect(() => {
    if (currentPage === 'processing') {
      const timer = setTimeout(() => {
        navigateTo('diagnosis');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage !== 'landing' && (
        <Header
          currentPage={currentPage}
          onBack={goBack}
          onProfileClick={() => navigateTo('profile')}
        />
      )}
      {renderCurrentPage()}
    </div>
  );
}

export default App;