import React, { useState } from 'react';
import {
  Stack,
  DefaultButton,
  Persona,
  PersonaSize,
  ContextualMenu,
  mergeStyleSets,
  FontWeights,
  getTheme,
  IconButton,
} from '@fluentui/react';

interface MenuItem {
  key: string;
  text: string;
  icon?: string;
  onClick?: () => void;
}

interface LayoutProps {
  menuItems: MenuItem[];
  children: React.ReactNode;
  userName: string;
  userEmail?: string;
}

export const Layout: React.FC<LayoutProps> = ({ menuItems, children, userName, userEmail }) => {
  const theme = getTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileTarget, setProfileTarget] = useState<HTMLElement | null>(null);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleProfile = (ev: React.MouseEvent<HTMLElement>) => {
    setProfileTarget(ev.currentTarget);
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);

  const styles = mergeStyleSets({
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: theme.palette.neutralLighter,
    },
    sideNav: {
      width: isNavCollapsed ? 60 : 220,
      background: theme.palette.neutralLighter,
      padding: 10,
      boxSizing: 'border-box',
      transition: 'width 0.2s',
      overflowX: 'hidden',
      '@media (max-width: 768px)': {
        position: 'absolute',
        zIndex: 1000,
        height: '100%',
        left: isNavCollapsed ? -220 : 0,
        boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
      },
    },
    menuButton: {
      width: '100%',
      marginBottom: 5,
      textAlign: 'left',
      justifyContent: isNavCollapsed ? 'center' : 'flex-start',
    },
    mainArea: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      transition: 'margin-left 0.2s',
    },
    topBar: {
      height: 50,
      background: theme.palette.themePrimary,
      color: theme.palette.white,
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: `0 1px 3px ${theme.palette.neutralQuaternaryAlt}`,
    },
    mainContent: {
      padding: 20,
      flexGrow: 1,
      background: theme.palette.white,
      minHeight: 'calc(100vh - 50px - 40px)',
    },
    footer: {
      height: 40,
      background: theme.palette.neutralLighter,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: FontWeights.semibold,
      boxShadow: `0 -1px 3px ${theme.palette.neutralQuaternaryAlt}`,
    },
  });

  return (
    <div className={styles.container}>
      {/* Side Navigation */}
      <div className={styles.sideNav}>
        <IconButton
          iconProps={{ iconName: isNavCollapsed ? 'ChevronRight' : 'ChevronLeft' }}
          title="Toggle Menu"
          ariaLabel="Toggle Menu"
          onClick={toggleNav}
        />
        {menuItems.map((item) => (
          <DefaultButton
            key={item.key}
            text={isNavCollapsed ? '' : item.text}
            iconProps={item.icon ? { iconName: item.icon } : undefined}
            className={styles.menuButton}
            onClick={item.onClick}
          />
        ))}
      </div>

      {/* Main Area */}
      <div className={styles.mainArea}>
        {/* Top Bar */}
        <Stack horizontal verticalAlign="center" className={styles.topBar}>
          <div>
            <IconButton
              iconProps={{ iconName: 'GlobalNavButton' }}
              title="Toggle Menu"
              ariaLabel="Toggle Menu"
              onClick={toggleNav}
              styles={{ root: { color: theme.palette.white, marginRight: 10, display: 'none', '@media (max-width: 768px)': { display: 'inline-flex' } } }}
            />
          </div>

          <Persona
            text={userName}
            secondaryText={userEmail}
            size={PersonaSize.size32}
            onClick={toggleProfile}
            hidePersonaDetails={false}
            styles={{ root: { cursor: 'pointer' } }}
          />

          {isProfileOpen && profileTarget && (
            <ContextualMenu
              items={[
                { key: 'profile', text: 'View Profile', onClick: () => alert('View Profile') },
                { key: 'logout', text: 'Logout', onClick: () => alert('Logout') },
              ]}
              target={profileTarget}
              onDismiss={() => setIsProfileOpen(false)}
            />
          )}
        </Stack>

        {/* Main Content */}
        <div className={styles.mainContent}>{children}</div>

        {/* Footer */}
        <div className={styles.footer}>© 2026 My Admin Dashboard</div>
      </div>
    </div>
  );
};
