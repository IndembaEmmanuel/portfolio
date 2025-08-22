import { useState, useEffect } from 'react';
import { languages } from '../../i18n/i18n';

interface LanguageSwitcherProps {
  currentLanguage: string;
}

const LanguageSwitcher = ({ currentLanguage = 'fr' }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(currentLanguage);

  useEffect(() => {
    setSelectedLang(currentLanguage);
  }, [currentLanguage]);

  const handleLanguageChange = (lang: string) => {
    if (lang === selectedLang) {
      setIsOpen(false);
      return;
    }

    const currentPath = window.location.pathname;
    let newPath = '';
    
    newPath = `/${lang}`;
    
    if (currentPath !== '/' && currentPath !== '/fr' && currentPath !== '/en') {
      const pathParts = currentPath.split('/').filter(Boolean);
      
      if (Object.keys(languages).includes(pathParts[0])) {
        pathParts.shift();
      }
      
      if (pathParts.length > 0) {
        newPath = `/${lang}/${pathParts.join('/')}`;
      }
    }

    window.location.href = newPath;
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{languages[selectedLang as keyof typeof languages]}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`chevron-icon ${isOpen ? 'open' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <ul 
          className="language-dropdown"
          role="listbox"
          aria-activedescendant={selectedLang}
        >
          {Object.entries(languages).map(([code, name]) => (
            <li 
              key={code}
              role="option"
              aria-selected={code === selectedLang}
              className={`language-option ${code === selectedLang ? 'selected' : ''}`}
              onClick={() => handleLanguageChange(code)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      <style>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 0.5rem 0.75rem;
          color: var(--color-text-primary);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .language-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .chevron-icon {
          transition: transform 0.2s ease;
        }

        .chevron-icon.open {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: var(--color-bg-secondary);
          border-radius: 6px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          padding: 0.5rem;
          min-width: 120px;
          z-index: 100;
          list-style: none;
          margin: 0;
        }

        .language-option {
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .language-option:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .language-option.selected {
          background: var(--color-accent);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
