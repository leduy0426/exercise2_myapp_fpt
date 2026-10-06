import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SvgIcon from './imgs/icons';

export default function App() {
  const [currentTab, setCurrentTab] = useState('AllApps'); // 'Home', 'AllApps', 'Gold', 'Game', 'Profile'

  const renderCurrentScreen = () => {
    switch (currentTab) {
      case 'AllApps':
        return <AllAppsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return (
          <View style={styles.placeholderContainer}>
            <SvgIcon
              name={
                currentTab === 'Home'
                  ? 'ic_tab_home'
                  : currentTab === 'Gold'
                    ? 'icon_bot_nav_gold_active'
                    : 'ic_tab_game'
              }
              width={64}
              height={64}
              color="#0066CC"
            />
            <Text style={styles.placeholderTitle}>{currentTab} Screen</Text>
            <Text style={styles.placeholderSubtitle}>
              This screen is under construction. Please switch to All Apps or Profile.
            </Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Main Content Area */}
      <View style={styles.contentContainer}>{renderCurrentScreen()}</View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => setCurrentTab('Home')}
          style={styles.navItem}
          activeOpacity={0.7}
        >
          <SvgIcon
            name={currentTab === 'Home' ? 'ic_tab_home_active' : 'ic_tab_home'}
            width={currentTab === 'Home' ? 28 : 24}
            height={currentTab === 'Home' ? 28 : 24}
            color={currentTab === 'Home' ? '#0066CC' : '#8E8E93'}
          />
          <Text style={[styles.navText, currentTab === 'Home' && styles.navTextActive]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentTab('AllApps')}
          style={styles.navItem}
          activeOpacity={0.7}
        >
          <SvgIcon
            name={currentTab === 'AllApps' ? 'ic_tab_all_apps_active' : 'ic_tab_all_apps'}
            width={currentTab === 'AllApps' ? 28 : 24}
            height={currentTab === 'AllApps' ? 28 : 24}
            color={currentTab === 'AllApps' ? '#0066CC' : '#8E8E93'}
          />
          <Text style={[styles.navText, currentTab === 'AllApps' && styles.navTextActive]}>
            All Apps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentTab('Gold')}
          style={styles.navItem}
          activeOpacity={0.7}
        >
          <SvgIcon
            name={currentTab === 'Gold' ? 'icon_bot_nav_gold_active' : 'ic_gold_point_recognize_disable'}
            width={currentTab === 'Gold' ? 28 : 24}
            height={currentTab === 'Gold' ? 28 : 24}
            color={currentTab === 'Gold' ? '#0066CC' : '#8E8E93'}
          />
          <Text style={[styles.navText, currentTab === 'Gold' && styles.navTextActive]}>
            Gold
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentTab('Game')}
          style={styles.navItem}
          activeOpacity={0.7}
        >
          <SvgIcon
            name={currentTab === 'Game' ? 'ic_tab_game_active' : 'ic_tab_game'}
            width={currentTab === 'Game' ? 28 : 24}
            height={currentTab === 'Game' ? 28 : 24}
            color={currentTab === 'Game' ? '#0066CC' : '#8E8E93'}
          />
          <Text style={[styles.navText, currentTab === 'Game' && styles.navTextActive]}>
            Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentTab('Profile')}
          style={styles.navItem}
          activeOpacity={0.7}
        >
          <SvgIcon
            name={currentTab === 'Profile' ? 'ic_icon_bot_nav_profile_active' : 'ic_icon_bot_nav_profile'}
            width={currentTab === 'Profile' ? 28 : 24}
            height={currentTab === 'Profile' ? 28 : 24}
            color={currentTab === 'Profile' ? '#0066CC' : '#8E8E93'}
          />
          <Text style={[styles.navText, currentTab === 'Profile' && styles.navTextActive]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// -------------------------------------------------------------
// SCREEN 1: ALL APPS (LIST VIEW & GRID VIEW TOGGLE)
// -------------------------------------------------------------
function AllAppsScreen() {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [searchQuery, setSearchQuery] = useState('');

  const workItems = [
    {
      id: '1',
      title: 'Approve Now',
      desc: 'Notify managers of pending requests and allow managers to approve/reject requests from internal tools',
      iconName: 'ic_app_approve_now',
    },
    {
      id: '2',
      title: 'Reward',
      desc: 'Send colleagues a thank you note or reward Gold for exceptional contribution',
      iconName: 'ic_app_reward',
    },
    {
      id: '3',
      title: 'Discipline',
      desc: 'Send a discipline warning to subordinates for violation of codes of conduct',
      iconName: 'ic_app_discipline',
    },
    {
      id: '4',
      title: 'Learning',
      desc: 'View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course',
      iconName: 'ic_app_learning',
    },
    {
      id: '5',
      title: 'My Tasks',
      desc: '',
      iconName: 'ic_app_my_tasks',
    },
  ];

  const utilityItems = [
    {
      id: '6',
      title: 'FPT Care',
      desc: 'FPT Care',
      iconName: 'ic_app_fpt_care',
    },
    {
      id: '7',
      title: 'Events',
      desc: 'Register, check-in, check-out, send feedback to company events and programs',
      iconName: 'ic_app_events',
    },
    {
      id: '8',
      title: 'Survey',
      desc: 'Conduct and collect responses for company-wide or department-wide surveys',
      iconName: 'ic_app_survey',
    },
    {
      id: '9',
      title: 'FPT Dating',
      desc: 'Dating feature.',
      iconName: 'ic_app_fpt_dating',
    },
    {
      id: '10',
      title: 'Payslip',
      desc: 'Payslip',
      iconName: 'ic_app_payslip',
    },
    {
      id: '11',
      title: 'Birthday',
      desc: "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT.",
      iconName: 'ic_app_birthday',
    },
  ];

  const newsItems = [
    {
      id: '12',
      title: 'News',
      desc: 'A collection of latest news and notable events around the company',
      iconName: 'ic_app_news',
    },
    {
      id: '13',
      title: 'Star Ave',
      desc: 'Recognise notable achievements within a business unit or within FPT',
      iconName: 'ic_app_star_ave',
    },
  ];

  const wikiItems = [
    {
      id: '14',
      title: 'Employee Info',
      desc: 'Basic, non-confidential employee information (name, gender, department, etc.)',
      iconName: 'ic_app_employee_info',
    },
  ];

  const gameItems = [
    {
      id: '15',
      title: 'Game',
      desc: 'Community-engaging games with Gold as rewards',
      iconName: 'ic_app_game',
    },
  ];

  const filterItems = (items) => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  };

  const filteredWork = filterItems(workItems);
  const filteredUtilities = filterItems(utilityItems);
  const filteredNews = filterItems(newsItems);
  const filteredWiki = filterItems(wikiItems);
  const filteredGame = filterItems(gameItems);

  const hasAnyMatches =
    filteredWork.length > 0 ||
    filteredUtilities.length > 0 ||
    filteredNews.length > 0 ||
    filteredWiki.length > 0 ||
    filteredGame.length > 0;

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'list' ? 'grid' : 'list'));
  };

  const renderListItem = (item) => (
    <TouchableOpacity key={item.id} style={styles.appRow} activeOpacity={0.7}>
      <View style={styles.appIconWrapper}>
        <SvgIcon name={item.iconName} width={26} height={26} />
      </View>
      <View style={styles.appContent}>
        <Text style={styles.appTitle}>{item.title}</Text>
        {item.desc ? (
          <Text style={styles.appDesc} numberOfLines={2}>
            {item.desc}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );

  const renderGridItem = (item) => (
    <TouchableOpacity key={item.id} style={styles.gridAppCell} activeOpacity={0.7}>
      <View style={styles.gridIconCircle}>
        <SvgIcon name={item.iconName} width={32} height={32} />
      </View>
      <Text style={styles.gridAppTitle} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Top Search Header */}
        <View style={styles.searchHeader}>
          <View style={styles.searchBox}>
            <SvgIcon name="ic_search" width={18} height={18} color="#8E8E93" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Type feature's name"
              placeholderTextColor="#8E8E93"
              value={searchQuery}
              onChangeText={setSearchQuery}
              clearButtonMode="while-editing"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={18} color="#8E8E93" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.gridBtn} activeOpacity={0.7} onPress={toggleViewMode}>
            <SvgIcon
              name={viewMode === 'list' ? 'ic_common_gridview' : 'ic_common_listview'}
              width={24}
              height={24}
              color="#8E8E93"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.screenHeading}>All Apps</Text>

        {viewMode === 'list' ? (
          /* List View Mode */
          <>
            {filteredWork.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>WORK</Text>
                </View>
                {filteredWork.map(renderListItem)}
              </>
            )}

            {filteredUtilities.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>UTILITIES</Text>
                </View>
                {filteredUtilities.map(renderListItem)}
              </>
            )}

            {filteredNews.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>NEWS</Text>
                </View>
                {filteredNews.map(renderListItem)}
              </>
            )}

            {filteredWiki.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>WIKI</Text>
                </View>
                {filteredWiki.map(renderListItem)}
              </>
            )}

            {filteredGame.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>GAME</Text>
                </View>
                {filteredGame.map(renderListItem)}
              </>
            )}
          </>
        ) : (
          /* Grid View Mode (1 dòng 4 Icon) */
          <>
            {filteredWork.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>WORK</Text>
                </View>
                <View style={styles.gridRowContainer}>{filteredWork.map(renderGridItem)}</View>
              </>
            )}

            {filteredUtilities.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>UTILITIES</Text>
                </View>
                <View style={styles.gridRowContainer}>{filteredUtilities.map(renderGridItem)}</View>
              </>
            )}

            {filteredNews.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>NEWS</Text>
                </View>
                <View style={styles.gridRowContainer}>{filteredNews.map(renderGridItem)}</View>
              </>
            )}

            {filteredWiki.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>WIKI</Text>
                </View>
                <View style={styles.gridRowContainer}>{filteredWiki.map(renderGridItem)}</View>
              </>
            )}

            {filteredGame.length > 0 && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>GAME</Text>
                </View>
                <View style={styles.gridRowContainer}>{filteredGame.map(renderGridItem)}</View>
              </>
            )}
          </>
        )}

        {!hasAnyMatches && (
          <View style={styles.emptyState}>
            <SvgIcon name="ic_search" width={48} height={48} color="#C7C7CC" />
            <Text style={styles.emptyText}>No features match "{searchQuery}"</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// -------------------------------------------------------------
// SCREEN 2: PROFILE
// -------------------------------------------------------------
function ProfileScreen() {
  const menuList = [
    { id: '1', title: 'My Profile', iconName: 'ic_menu_my_profile' },
    { id: '2', title: 'Settings', iconName: 'ic_menu_settings' },
    { id: '3', title: 'Support', iconName: 'ic_menu_support' },
    { id: '4', title: 'FAQ', iconName: 'ic_menu_faq' },
    { id: '5', title: 'Admin', iconName: 'ic_menu_admin' },
    { id: '6', title: 'Logout', iconName: 'ic_menu_logout' },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollPadding}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Banner */}
      <View style={styles.profileBanner}>
        <View style={styles.avatarOverlap}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>K</Text>
          </View>
          <TouchableOpacity style={styles.cameraIconBadge} activeOpacity={0.8}>
            <SvgIcon name="ic_camera_avatar" width={14} height={14} color="#555555" />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.userInfoBox}>
        <Text style={styles.userName}>Lê Duy (DUYLHE194188)</Text>
        <Text style={styles.userRole}>(Student)</Text>
      </View>

      {/* Menu List */}
      <View style={styles.menuContainer}>
        {menuList.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuRow} activeOpacity={0.7}>
            <View style={styles.menuLeft}>
              <SvgIcon
                name={item.iconName}
                width={22}
                height={22}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
            <SvgIcon name="ic_arrow_right_16" width={22} height={22} color="#C7C7CC" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Version Info */}
      <View style={styles.versionFooter}>
        <Text style={styles.versionText}>myFPT Version 5.9.10</Text>
        <Text style={styles.versionText}>Copyright @ FPT Software 2021</Text>
      </View>
    </ScrollView>
  );
}

// -------------------------------------------------------------
// STYLESHEET
// -------------------------------------------------------------
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },
  contentContainer: {
    flex: 1,
  },
  scrollPadding: {
    paddingBottom: Platform.OS === 'android' ? 36 : 20,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  placeholderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginTop: 16,
    marginBottom: 8,
  },
  placeholderSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
  },
  // Search Header
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    paddingVertical: 0,
  },
  gridBtn: {
    marginLeft: 12,
    padding: 6,
  },
  screenHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  // Section Headers
  sectionHeader: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginTop: 12,
  },
  sectionHeaderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6C6C70',
    letterSpacing: 0.8,
  },
  // List View Row
  appRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  appIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  appContent: {
    flex: 1,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  appDesc: {
    fontSize: 13,
    color: '#6C6C70',
    lineHeight: 17,
  },
  // Grid View Styles (1 Dòng 4 App)
  gridRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  gridAppCell: {
    width: '25%',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  gridIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EEF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridAppTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
    textAlign: 'center',
    lineHeight: 15,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 15,
    color: '#8E8E93',
  },
  // Profile styles
  profileBanner: {
    height: 120,
    backgroundColor: '#2F80ED',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 44,
  },
  avatarOverlap: {
    position: 'absolute',
    bottom: -36,
    alignItems: 'center',
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DDF0FF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarLetter: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  cameraIconBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#F2F2F7',
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userInfoBox: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  userRole: {
    fontSize: 13,
    color: '#8E8E93',
  },
  menuContainer: {
    marginTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E5EA',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
    backgroundColor: '#FFFFFF',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 14,
    width: 24,
    textAlign: 'center',
  },
  menuText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  versionFooter: {
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 20,
  },
  versionText: {
    fontSize: 12,
    color: '#8E8E93',
    lineHeight: 18,
  },
  // Bottom Bar
  bottomNav: {
    height: Platform.OS === 'ios' ? 64 : 72,
    paddingBottom: Platform.OS === 'ios' ? 10 : 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#D1D1D6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    marginTop: 2,
    color: '#8E8E93',
  },
  navTextActive: {
    color: '#0066CC',
    fontWeight: 'bold',
  },
});
